 "use client";

import type { ChangeEvent, FC, FormEvent, ReactNode } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import NavSection from "../landing/NavSection";

const CircleIcon: FC<{ color: string; icon: "user" | "bolt" }> = ({ color, icon }) => (
  <span
    className="relative inline-flex h-16 w-16 items-center justify-center rounded-full border text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] sm:h-20 sm:w-20"
    style={{ borderColor: `${color}55`, boxShadow: `0 12px 40px rgba(0,0,0,0.35), 0 0 0 1px ${color}22` }}
  >
    <span className="absolute inset-1 rounded-full border border-white/10" aria-hidden />
    {icon === "user" ? (
      <svg aria-hidden viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke={color} strokeWidth="1.8">
        <circle cx="12" cy="8" r="3.25" />
        <path d="M5 19.25c0-3.25 3.134-5.25 7-5.25s7 2 7 5.25" />
      </svg>
    ) : (
      <svg aria-hidden viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 4 6 12l7-4-2 8 7-4-2 8" />
      </svg>
    )}
  </span>
);

const PurposeSection: FC = () => {
  const missionTags = ["Safe", "Private", "Non-judgmental"];

  return (
    <section id="purpose" className="relative overflow-hidden bg-[#0A0510] px-4">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(130,64,255,0.45),transparent_45%),radial-gradient(circle_at_50%_40%,rgba(10,5,16,0.3),transparent_60%)]" />
      <div className="content-shell relative z-10 space-y-12 py-20 sm:py-24 md:py-28">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex items-center justify-center gap-6 md:gap-8">
            <CircleIcon color="#9c7dff" icon="user" />
            <div className="space-y-3 text-balance font-serif text-[44px] font-semibold leading-[1.1] tracking-[-1.5px] text-white sm:text-[64px] md:text-[76px] md:leading-[1.05] lg:text-[84px]">
              <div>We exists to help</div>
              <div className="relative inline-flex items-center justify-center">
                <span
                  className="absolute inset-0 rounded-full border border-white/12 bg-white/5"
                  style={{ boxShadow: "0 0 0 10px rgba(167,139,250,0.08)" }}
                  aria-hidden
                />
                <span className="relative px-5 py-3 font-serif text-[44px] italic leading-[1.05] tracking-[-1.5px] text-white sm:text-[64px] md:text-[76px] lg:text-[84px]">
                  people better
                </span>
              </div>
              <div>understand themselves.</div>
            </div>
            <CircleIcon color="#fe6839" icon="bolt" />
          </div>

          <p className="mx-auto max-w-5xl text-center text-lg leading-8 text-[#d7d0e8] sm:text-[18px] sm:leading-8">
            We are a <strong className="font-semibold text-white">science-led psychometric research and insights platform</strong> dedicated to
            reducing human suffering and supporting lasting happiness. We combine established scientific disciplines, practical wisdom, and modern
            technology to provide tools for <strong className="font-semibold text-white">transforming self-understanding</strong> into{" "}
            <strong className="font-semibold text-white">personal growth.</strong>
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#1f1029] via-[#0f081a] to-[#0a0510] p-10 shadow-card">
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#2e0147] opacity-40 blur-[140px]" />
            <div className="pointer-events-none absolute bottom-[-80px] right-[-80px] h-64 w-64 rounded-full bg-[#fe6839] opacity-30 blur-[140px]" />
            <h3 className="font-serif text-3xl font-semibold text-white sm:text-[32px]">The Challenge</h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#9CA3AF] sm:text-[16px] sm:leading-8">
              Most people navigate personal growth guided by instinct, guesswork, or outdated knowledge. Yet personal growth is the most influential
              force in our lives, shaping our happiness, mental health, general health, confidence, and sense of belonging.
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#1f1029] via-[#0f081a] to-[#0a0510] p-8 shadow-card">
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#a78bfa]/20 blur-3xl" />
              <h3 className="font-serif text-3xl font-semibold text-white sm:text-[32px]">Our Mission</h3>
              <p className="mt-3 text-base leading-7 text-[#9CA3AF]">
                To help people understand themselves scientifically, emotionally, and experimentially. LoveIQ is designed to feel:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {missionTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-[#9CA3AF] shadow-[0_3px_10px_rgba(167,139,250,0.08)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#1f1029] via-[#0f081a] to-[#0a0510] p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-4">
              <h3 className="font-serif text-3xl font-semibold text-white sm:text-[32px]">Our Vision</h3>
              <p className="text-base leading-7 text-[#9CA3AF] sm:text-[16px]">
                Our vision is to become the world’s most trusted platform for human self-understanding &amp; development to increase human happiness.
                We start with sexuality, but our horizon extends toward mapping the entire emotional and psychological landscape — identity,
                attachment, love, and beyond.
              </p>
            </div>
            <div className="relative h-60 overflow-hidden rounded-2xl border border-white/5 bg-white/5">
              <Image
                src="/about/about-vision-bg.png"
                alt="Abstract gradient background"
                fill
                sizes="(min-width: 1024px) 380px, 100vw"
                className="object-cover opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#2e0147]/40 via-transparent to-[#0a0510]" />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#2e0147] opacity-30 blur-[240px]" />
    </section>
  );
};

const SolutionSection: FC = () => {
  const solutions = [
    {
      title: "Educational Surveys",
      description: "Educational and guided surveys for psychometric assessments.",
    },
    {
      title: "Practical Reports",
      description: "Science first and practical reports on psychometric conditions (non medical).",
    },
    {
      title: "Guided Growth",
      description: "Tools, services, workshops and coaching to take insights into life changing actions.",
    },
  ];

  return (
    <section id="solution" className="bg-[#0A0510] px-4 py-20 sm:py-24">
      <div className="content-shell space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="font-serif text-4xl font-semibold text-white sm:text-5xl">Our Solution</h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#9CA3AF]">
            Complete tools to transform insights into life changing actions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="relative flex flex-col gap-4 overflow-hidden rounded-[32px] border border-white/8 bg-[#120B1C] p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-16 rounded-full bg-[#fe6839]" />
                  <span className="h-2 w-8 rounded-full bg-white/10" />
                </div>
                <span className="h-2 w-10 rounded-full bg-white/15" />
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-7 text-[#9CA3AF]">{item.description}</p>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#fe6839]/10 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection: FC = () => {
  const steps = [
    {
      title: "Research",
      description: "We constantly process latest scientific research papers, books and practical wisdom.",
    },
    {
      title: "Transformation",
      description: "We turn knowledge into simplified frameworks tailored to human needs and designed to be understood easily.",
    },
    {
      title: "Surveys",
      description: "We develop guided surveys across disciplines designed for people to learn and reflect efficiently.",
    },
    {
      title: "Reports",
      description: "Personal insights are transformed into informative reports that help humans better understand themselves.",
    },
    {
      title: "Guided action steps",
      description: "Tools & services help people take specific actions to change their lives for the better.",
    },
  ];

  const orbitLabels = [
    { label: "Research", className: "left-[18%] top-[18%]" },
    { label: "Knowledge", className: "right-[18%] top-[30%]" },
    { label: "Insights", className: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" },
    { label: "Action", className: "right-[22%] bottom-[28%]" },
    { label: "Reflection", className: "left-[16%] bottom-[24%]" },
  ];

  return (
    <section id="process" className="bg-[#0A0510] px-4 py-20 sm:py-24">
      <div className="content-shell grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="space-y-10">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="font-serif text-4xl font-semibold text-white sm:text-5xl">How We Work</h2>
            <p className="text-lg leading-relaxed text-[#9CA3AF]">
              We work like a super-therapist and coach that never stops learning by continuously consuming new research, books, and practical expertise to transform that knowledge into easy understandable, actionable, and personalized insights for our users.
            </p>
          </div>

          <div className="relative mx-auto h-[360px] w-[360px] max-w-full">
            <div className="pointer-events-none absolute inset-0 rounded-full bg-[conic-gradient(from_90deg,rgba(254,104,57,0.28),rgba(46,1,71,0.4),rgba(254,104,57,0.18))] blur-[60px]" />
            <div className="relative flex h-full w-full items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-[#1a1025] via-[#0a0510] to-[#0a0510] shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
              {orbitLabels.map((item) => (
                <div
                  key={item.label}
                  className={`absolute inline-flex items-center justify-center rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[12px] font-semibold text-white/90 backdrop-blur ${item.className}`}
                >
                  {item.label}
                </div>
              ))}
              <div className="absolute inset-10 rounded-full border border-white/10" />
              <div className="absolute inset-20 rounded-full border border-white/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#fe6839] to-[#a78bfa] text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
                  Insights
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {steps.map((step) => (
            <div key={step.title} className="flex gap-4 rounded-2xl border border-white/10 bg-[#120B1C] p-5 shadow-[0_20px_50px_-18px_rgba(0,0,0,0.6)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#2e0147] to-[#fe6839] text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
                <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
              <div className="space-y-1.5">
                <h3 className="font-serif text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-sm leading-7 text-[#9CA3AF]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PublicationsSection: FC = () => {
  const publications = [
    {
      title: "Intimacy and sexual well-being in couples coping with sexual interest/arousal disorder",
      meta: "2025 • Harvard University",
    },
    {
      title: "The importance of perceived partner responsiveness in modern relationships",
      meta: "2025 • Stanford Psychology",
    },
    {
      title: "Digital Therapeutics: Bridging the gap between diagnosis and daily wellness",
      meta: "2024 • Journal of Digital Health",
    },
  ];

  return (
    <section id="publications" className="bg-[#0A0510] px-4 py-20 sm:py-24">
      <div className="content-shell space-y-8">
        <div className="flex items-center gap-4">
          <span className="hidden h-px flex-1 bg-white/15 sm:block" aria-hidden />
          <h2 className="text-center font-serif text-3xl font-semibold text-white sm:text-4xl">Latest Science &amp; Publications</h2>
          <span className="hidden h-px flex-1 bg-white/15 sm:block" aria-hidden />
        </div>

        <div className="space-y-4">
          {publications.map((pub) => (
            <Link
              key={pub.title}
              href="#"
              className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-[#120B1C] p-6 transition hover:-translate-y-[2px] hover:border-white/20 hover:bg-[#181027]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold leading-snug text-white">{pub.title}</h3>
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#6B7280]">{pub.meta}</p>
                </div>
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/10">
                  <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamSection: FC = () => {
  const team = [
    {
      name: "Marcus Börner",
      role: "Strategy Lead",
      image: "/about/team-marcus-borner-56586a.png",
    },
    {
      name: "Ema Djedović",
      role: "Product Lead",
      image: "/about/team-ema-djedovic.png",
    },
    {
      name: "Eman Čičkušić",
      role: "Tech Lead",
      image: "/about/team-eman-cickusic-61a88a.png",
    },
    {
      name: "Ferhad Jukić",
      role: "Tech Lead",
      image: "/about/team-ferhad-jukic.png",
    },
    {
      name: "Ismar Fazlić",
      role: "Design Lead",
      image: "/about/team-ismar-fazlic-74951d.png",
    },
  ];

  return (
    <section id="team" className="relative overflow-hidden bg-[#0A0510] px-4 pb-4 pt-20 sm:pt-24">
      <div className="content-shell relative z-10 flex flex-col items-center gap-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#fe6839] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-white shadow-[0_4px_10px_rgba(254,104,57,0.3)]">
          Our Team
        </div>
        <div className="space-y-4 text-center">
          <h2 className="font-serif text-4xl font-semibold text-white sm:text-[48px]">Leadership Team With Vision</h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#9CA3AF]">
            We’ve combined years of clinical experience, cutting-edge psychology, and intuitive design to create a platform that gives you complete visibility into your emotional well-being.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="flex h-full flex-col overflow-hidden rounded-[32px] border border-white/10 bg-[#120B1C] p-4 shadow-[0_20px_50px_-18px_rgba(0,0,0,0.6)]">
              <div className="relative aspect-[1/1] overflow-hidden rounded-2xl">
                <Image src={member.image} alt={member.name} fill sizes="(min-width: 1024px) 320px, 50vw" className="object-cover" />
              </div>
              <div className="mt-4 px-2">
                <h3 className="font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-[#6B7280]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#2e0147] opacity-40 blur-[200px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#fe6839] opacity-30 blur-[200px]" />
    </section>
  );
};

const ContactSection: FC = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message?: string }>({ type: "idle" });
  const [submitting, setSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaReady, setCaptchaReady] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const recaptchaContainerRef = useRef<HTMLDivElement | null>(null);
  const recaptchaIdRef = useRef<number | null>(null);
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
    if (recaptchaIdRef.current !== null && grecaptcha) {
      grecaptcha.reset(recaptchaIdRef.current);
      setCaptchaToken(null);
    }
  };

  const renderCaptcha = useCallback(() => {
    const grecaptcha = getGrecaptcha();
    if (!recaptchaContainerRef.current || !grecaptcha || !siteKey) return;
    if (recaptchaIdRef.current !== null) return;

    const id = grecaptcha.render(recaptchaContainerRef.current, {
      sitekey: siteKey,
      theme: "light",
      callback: (token: string) => setCaptchaToken(token),
      "expired-callback": () => setCaptchaToken(null),
      "error-callback": () => setCaptchaToken(null),
    });
    recaptchaIdRef.current = id;
    setCaptchaReady(true);
  }, [siteKey]);

  useEffect(() => {
    if (!siteKey) return;
    if (scriptLoaded && getGrecaptcha()) {
      renderCaptcha();
    }
  }, [renderCaptcha, scriptLoaded, siteKey]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;

    if (!siteKey) {
      setStatus({ type: "error", message: "Captcha is not configured. Please try again later." });
      return;
    }

    const grecaptcha = getGrecaptcha();
    const token = captchaToken || (recaptchaIdRef.current !== null ? grecaptcha?.getResponse(recaptchaIdRef.current) : "");
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
                />
                {!captchaReady && (
                  <div className="mt-2 text-xs font-medium text-[#4B5563]">
                    Captcha loading… If it does not appear, disable blockers and reload.
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

const AboutFooter: FC = () => (
  <footer className="bg-[#050208] px-4 py-16 text-white">
    <div className="content-shell space-y-10">
      <div className="flex flex-col gap-10 border-b border-white/10 pb-8 md:flex-row md:justify-between md:gap-12">
        <div className="space-y-4 md:max-w-md">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-pill">
              <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19s-7-4-7-9a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5-7 9-7 9Z" />
              </svg>
            </div>
            <span className="font-serif text-2xl font-semibold text-white">LoveIQ</span>
          </div>
          <p className="text-sm leading-relaxed text-[#6B7280]">
            Science-led psychometric assessment and wellbeing. Making self-understanding mainstream.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-semibold text-white">Platform</h4>
            <div className="space-y-2 text-sm text-[#6B7280]">
              <FooterLink href="/waitlist">Assessment</FooterLink>
              <FooterLink href="/#start">For Couples</FooterLink>
              <FooterLink href="/#about">Research</FooterLink>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-semibold text-white">Company</h4>
            <div className="space-y-2 text-sm text-[#6B7280]">
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 text-xs text-[#6B7280] sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 LoveIQ. All rights reserved.</span>
        <div className="flex flex-wrap gap-4">
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/terms">Terms of Service</FooterLink>
        </div>
      </div>
    </div>
  </footer>
);

type FooterLinkProps = {
  href: string;
  children: ReactNode;
};

const FooterLink: FC<FooterLinkProps> = ({ href, children }) => (
  <Link href={href} className="transition hover:text-white">
    {children}
  </Link>
);

const AboutPage: FC = () => {
  return (
    <main className="relative bg-[#0A0510] text-white">
      <NavSection />
      <div className="space-y-16 pt-28 sm:pt-32 md:space-y-20">
        <PurposeSection />
        <SolutionSection />
        <ProcessSection />
        <PublicationsSection />
        <TeamSection />
        <ContactSection />
      </div>
      <AboutFooter />
    </main>
  );
};

export default AboutPage;

