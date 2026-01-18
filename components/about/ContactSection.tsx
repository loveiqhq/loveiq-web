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
  <label htmlFor={id} className="flex flex-col gap-2">
    <span className="text-sm font-medium text-[#9CA3AF]">{label}</span>
    <input
      id={id}
      name={id}
      type={type}
      className="h-[49px] w-full border-b border-white/10 bg-transparent text-sm text-white transition focus:border-white/30 focus:outline-none focus:ring-0 disabled:opacity-60"
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
      // Get CSRF token from cookie
      const csrfToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("__csrf="))
        ?.split("=")[1] || "";

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-csrf-token": csrfToken,
        },
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
    <section id="contact" className="overflow-hidden bg-[#0A0510] px-4 py-16 md:px-6 md:py-24">
      <div className="content-shell mx-auto grid max-w-[1100px] gap-6 lg:grid-cols-2">
        <div className="reveal-on-scroll relative rounded-[24px] border border-white/10 bg-[#120B1C] p-8 md:rounded-[32px] md:p-16">
          <div className="pointer-events-none absolute inset-0 isolate overflow-hidden rounded-[24px] md:rounded-[32px]" style={{ clipPath: 'inset(0 round 24px)' }}>
            <div className="absolute -left-16 -top-16 h-[200px] w-[200px] rounded-full bg-[#2e0147] blur-[80px] md:-left-64 md:-top-64 md:h-[500px] md:w-[500px] md:blur-[200px]" />
            <div className="absolute -bottom-12 -right-10 h-[120px] w-[120px] rounded-full bg-[#fe6839] blur-[80px] md:-bottom-52 md:-right-40 md:h-[300px] md:w-[300px] md:blur-[200px]" />
          </div>
          <div className="relative">
            <h2 className="font-serif text-4xl font-semibold leading-[1] tracking-[-0.025em] text-white md:text-[60px] md:leading-[60px]">
              Contact Our
              <br />
              <span className="text-[#fe6839]">Team</span>
            </h2>
          </div>
        </div>

        <div className="reveal-on-scroll stagger-1 rounded-[24px] border border-white/10 bg-[#120B1C] p-6 md:rounded-[32px] md:p-12">
          <Script
            src="https://www.google.com/recaptcha/api.js?render=explicit"
            strategy="afterInteractive"
            id="recaptcha-script"
            onLoad={() => setScriptLoaded(true)}
            onError={() => setStatus({ type: "error", message: "Captcha failed to load. Please reload and try again." })}
          />
          <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6 md:gap-8">
              <FormField label="First name*" id="firstName" type="text" value={form.firstName} onChange={handleChange} disabled={submitting} />
              <FormField label="Last name*" id="lastName" type="text" value={form.lastName} onChange={handleChange} disabled={submitting} />
              <FormField label="Phone*" id="phone" type="tel" value={form.phone} onChange={handleChange} disabled={submitting} />
              <FormField label="Email*" id="email" type="email" value={form.email} onChange={handleChange} disabled={submitting} />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-[#9CA3AF]">
                How can we help you?*
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-xl border border-white/10 bg-[#0a0510]/50 px-4 py-4 text-sm font-light text-white placeholder:text-[#4B5563] focus:border-white/30 focus:outline-none disabled:opacity-60"
                placeholder="Tell us a bit about yourself and your project goals"
                value={form.message}
                onChange={handleChange}
                maxLength={1000}
                required
                disabled={submitting}
              />
              <div className="text-right text-xs text-[#4B5563]">1000 character limit</div>
            </div>

            <div className="flex flex-col gap-6 md:gap-8">
              <div>
                <div
                  ref={recaptchaContainerRef}
                  className="g-recaptcha min-h-[78px]"
                  style={{ transform: "scale(0.85)", transformOrigin: "0 0" }}
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
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-[2px] hover:border-white/35 focus-visible-ring disabled:cursor-not-allowed disabled:opacity-60 md:w-fit md:px-8"
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
