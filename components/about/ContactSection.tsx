"use client";

import type { ChangeEvent, FC, FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";

type FormFieldProps = {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

const FormField: FC<FormFieldProps> = ({ id, label, type = "text", value, onChange, disabled }) => (
  <label htmlFor={id} className="space-y-2">
    <span className="block text-sm font-medium text-[#9CA3AF]">{label}</span>
    <input
      id={id}
      name={id}
      type={type}
      className="h-12 w-full rounded-xl border-b border-white/10 bg-transparent px-3 text-sm text-white transition focus:border-white/30 focus:outline-none focus:ring-0 disabled:opacity-60"
      value={value}
      onChange={onChange}
      required
      disabled={disabled}
    />
  </label>
);

const ContactSection: FC = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message?: string }>({ type: "idle" });
  const [submitting, setSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaReady, setCaptchaReady] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const recaptchaContainerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<number | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const getGrecaptcha = () =>
    typeof window === "undefined"
      ? undefined
      : (window as unknown as { grecaptcha?: { render: Function; reset: (id?: number) => void; getResponse: (id?: number) => string } })
          .grecaptcha;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const resetCaptcha = () => {
    const grecaptcha = getGrecaptcha();
    if (!grecaptcha) return;
    if (widgetIdRef.current !== null) {
      grecaptcha.reset(widgetIdRef.current);
    } else {
      grecaptcha.reset();
    }
    setCaptchaToken(null);
  };

  const tryRenderCaptcha = () => {
    const grecaptcha = getGrecaptcha();
    if (!grecaptcha || !recaptchaContainerRef.current || !siteKey) return false;
    try {
      if (widgetIdRef.current !== null) return true;
      const id = grecaptcha.render(recaptchaContainerRef.current, {
        sitekey: siteKey,
        theme: "light",
        callback: (token: string) => setCaptchaToken(token),
        "expired-callback": () => setCaptchaToken(null),
        "error-callback": () => setCaptchaToken(null),
      });
      widgetIdRef.current = id;
      setCaptchaReady(true);
      setStatus((prev) => (prev.type === "error" && prev.message?.includes("Captcha failed") ? { type: "idle" } : prev));
      return true;
    } catch (err) {
      console.error("reCAPTCHA render error", err);
      setStatus({ type: "error", message: "Captcha failed to load. Please reload and try again." });
      return false;
    }
  };

  useEffect(() => {
    if (!siteKey || typeof window === "undefined") return;
    if (!scriptLoaded) return;

    if (tryRenderCaptcha()) return;

    const interval = setInterval(() => {
      if (tryRenderCaptcha()) {
        clearInterval(interval);
      }
    }, 600);

    const timeout = setTimeout(() => {
      if (!captchaReady) {
        setStatus({ type: "error", message: "Captcha failed to load. Please reload and try again." });
      }
    }, 8000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
    // tryRenderCaptcha intentionally not added to deps to avoid re-creating intervals each render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [captchaReady, scriptLoaded, siteKey]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;

    if (!siteKey) {
      setStatus({ type: "error", message: "Captcha is not configured. Please try again later." });
      return;
    }

    const grecaptcha = getGrecaptcha();
    const token = captchaToken || (widgetIdRef.current !== null ? grecaptcha?.getResponse(widgetIdRef.current) : grecaptcha?.getResponse());
    if (!token) {
      setStatus({ type: "error", message: "Please confirm you are not a robot." });
      return;
    }

    setSubmitting(true);
    setStatus({ type: "idle" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, captcha: token }),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus({ type: "error", message: data.error || "Unable to send right now. Please try again." });
        setSubmitting(false);
        return;
      }

      setStatus({ type: "success", message: "Thanks! We received your message and will be in touch soon." });
      setForm({ firstName: "", lastName: "", phone: "", email: "", message: "" });
      resetCaptcha();
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[#0A0510] px-4 py-20 sm:py-24">
      <div className="content-shell grid gap-6 lg:grid-cols-[1.05fr_1fr]">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#120B1C] p-10">
          <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-[#2e0147] opacity-40 blur-[180px]" />
          <div className="pointer-events-none absolute -bottom-16 right-10 h-56 w-56 rounded-full bg-[#fe6839] opacity-35 blur-[150px]" />
          <div className="relative">
            <h2 className="font-serif text-5xl font-semibold leading-[1.05] text-white sm:text-[60px]">
              Contact Our
              <br />
              Team
            </h2>
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-[#120B1C] p-8 sm:p-10">
          <Script
            src="https://www.google.com/recaptcha/api.js?render=explicit"
            strategy="afterInteractive"
            id="recaptcha-script"
            onLoad={() => setScriptLoaded(true)}
            onError={() => setStatus({ type: "error", message: "Captcha failed to load. Please reload and try again." })}
          />
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField label="First name*" id="firstName" type="text" value={form.firstName} onChange={handleChange} disabled={submitting} />
              <FormField label="Last name*" id="lastName" type="text" value={form.lastName} onChange={handleChange} disabled={submitting} />
              <FormField label="Phone*" id="phone" type="tel" value={form.phone} onChange={handleChange} disabled={submitting} />
              <FormField label="Email*" id="email" type="email" value={form.email} onChange={handleChange} disabled={submitting} />
            </div>

            <div className="space-y-3">
              <label htmlFor="message" className="text-sm font-medium text-[#9CA3AF]">
                How can we help you?*
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full rounded-xl border border-white/15 bg-[#0a0510]/80 px-4 py-3 text-sm text-white shadow-inner shadow-black/20 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-[#fe6839]/40 disabled:opacity-60"
                placeholder="Tell us a bit about yourself and your project goals"
                value={form.message}
                onChange={handleChange}
                maxLength={1000}
                required
                disabled={submitting}
              />
              <div className="text-right text-xs font-medium text-[#4B5563]">1000 character limit</div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="rounded-lg bg-white px-2 py-1">
                <div
                  ref={recaptchaContainerRef}
                  className="g-recaptcha min-h-[78px] min-w-[304px]"
                  aria-label="reCAPTCHA"
                  data-theme="light"
                  data-sitekey={siteKey}
                />
                {!captchaReady && (
                  <div className="mt-2 text-xs font-medium text-[#4B5563]">
                    Captcha loading... If it does not appear, disable blockers and reload.
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-[2px] hover:border-white/35 focus-visible-ring disabled:cursor-not-allowed disabled:opacity-60"
                disabled={submitting}
              >
                {submitting ? "Sending..." : "Submit"}
                <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>

            {status.type === "error" && (
              <div className="text-sm font-medium text-[#fca5a5]" role="alert">
                {status.message}
              </div>
            )}
            {status.type === "success" && (
              <div className="text-sm font-medium text-[#34d399]" role="status">
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
