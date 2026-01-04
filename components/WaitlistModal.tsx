'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { trackWaitlistSignup } from "../lib/analytics";

type WaitlistModalProps = {
  open: boolean;
  onClose: () => void;
};

const faqs = [
  {
    question: "What is LoveIQ Early Access?",
    answer:
      "Early Access members get priority entry to our platform before the public launch, exclusive content, and a locked-in lifetime discount on premium features.",
  },
  {
    question: "What's included in the survey?",
    answer:
      "Our comprehensive assessment covers 5 key psychological dimensions of intimacy. You will receive a detailed report outlining your unique profile immediately after completion.",
  },
  {
    question: "Is there support available?",
    answer:
      "Yes. Our team of relationship psychologists and support staff are available to help interpret your results and guide you through the platform.",
  },
  {
    question: "How much will this cost?",
    answer:
      "Joining the waitlist is free. The basic assessment is free, while deeper analytical reports will be available for a one-time fee or subscription.",
  },
];

const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64",
];

const WaitlistModal = ({ open, onClose }: WaitlistModalProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) {
      setErrorMessage("Please enter a valid email.");
      return;
    }
    setStatus("loading");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "landing-modal", website }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Something went wrong");
      }
      setStatus("success");
      trackWaitlistSignup("landing_modal");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Unable to join waitlist.");
    }
  };

  const backdropClasses = open
    ? "opacity-100 pointer-events-auto"
    : "opacity-0 pointer-events-none";
  const panelClasses = open
    ? "opacity-100 translate-y-0 scale-100"
    : "opacity-0 translate-y-4 scale-95";

  return (
    <div
      className={`fixed inset-0 z-[100] ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-labelledby="waitlist-modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`fixed inset-0 bg-[#050208]/80 backdrop-blur-xl transition-opacity duration-300 ${backdropClasses}`}
        onClick={onClose}
      />

      <div className="fixed inset-0 z-10 flex w-screen items-center justify-center overflow-y-auto px-4 py-8 sm:px-6">
        <div
          ref={panelRef}
          className={`relative w-full max-w-5xl transform overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0A0510] text-left shadow-2xl transition-all duration-300 ${panelClasses}`}
        >
          <div className="absolute right-8 top-8 z-50">
            <button
              type="button"
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white focus:outline-none"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center sm:px-12">
            <div className="mb-6 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FE6839] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FE6839]" />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-white/50">Available in early 2026</span>
            </div>

            <h3 id="waitlist-modal-title" className="mb-6 font-serif text-5xl font-semibold tracking-tighter text-white md:text-7xl">
              Get Early Access
            </h3>

            <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-400 text-balance">
              Be amongst the first to experience the new standard in relationship psychology. Sign up to be notified when we launch.
            </p>

            <form
              className="relative z-10 mb-10 w-full max-w-lg"
              onSubmit={(evt) => {
                evt.preventDefault();
                if (status !== "loading") {
                  handleSubmit();
                }
              }}
            >
              <input
                type="text"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-1.5 pl-6 shadow-xl shadow-black/20 transition-all hover:bg-white/10 focus-within:border-[#FE6839]/50 focus-within:ring-1 focus-within:ring-[#FE6839]/50">
                <input
                  type="email"
                  name="email"
                  className="h-12 flex-1 border-none bg-transparent pr-12 text-base text-white placeholder-white/30 focus:outline-none focus:ring-0"
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  inputMode="email"
                  autoCorrect="off"
                  autoCapitalize="none"
                  data-lpignore="true"
                  data-1p-ignore="true"
                  required
                />
                <button
                  type="submit"
                  className="whitespace-nowrap rounded-full bg-[#FE6839] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#FE6839]/20 transition-all hover:bg-[#ff7b52] hover:shadow-[#FE6839]/40"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Submitting..." : status === "success" ? "Joined!" : "Join waitlist"}
                </button>
              </div>
            </form>

            <div className="min-h-[32px] text-left" aria-live="polite" role="status">
              {status === "success" && (
                <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#9ef0c0] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                  <span className="h-2 w-2 rounded-full bg-[#9ef0c0]" aria-hidden />
                  You’re on the waitlist. Check your email for confirmation.
                </p>
              )}
              {status === "error" && errorMessage && (
                <p className="inline-flex items-center gap-2 rounded-full bg-[#2a0f15] px-4 py-2 text-sm font-semibold text-[#fca5a5] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                  <span className="h-2 w-2 rounded-full bg-[#fca5a5]" aria-hidden />
                  {errorMessage}
                </p>
              )}
            </div>

            <div className="mb-16 flex items-center gap-4">
              <div className="-space-x-3 flex">
                {avatars.map((src, idx) => (
                  <Image
                    key={src}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0A0510]"
                    src={src}
                    alt={`Waitlist avatar ${idx + 1}`}
                    width={32}
                    height={32}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-400">
                Join the <strong className="font-semibold text-white">fast-growing</strong> early-access waitlist
              </span>
            </div>

            <div className="w-full max-w-2xl text-left">
              <h4 className="mb-4 text-center font-serif text-3xl text-white">Frequently Asked Questions</h4>
              <p className="mb-12 text-center text-sm text-gray-400">Everything you need to know about the early access.</p>

              <div className="space-y-2">
                {faqs.map((item) => (
                  <details
                    key={item.question}
                    className="group overflow-hidden rounded-2xl border border-white/5 bg-white/5 transition-all duration-300 hover:bg-white/10 open:bg-white/10"
                  >
                    <summary className="flex cursor-pointer select-none items-center justify-between p-6">
                      <span className="font-medium text-white">{item.question}</span>
                      <span className="text-white/50 transition-transform duration-300 group-open:rotate-45">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-sm leading-relaxed text-gray-400">{item.answer}</div>
                  </details>
                ))}
              </div>
            </div>

            <div className="mt-20 flex gap-4 border-t border-white/5 pt-8 text-xs text-gray-600">
              <span>Built With Science</span>
              <span>&gt;</span>
              <span>Join the Movement</span>
              <span>&gt;</span>
              <span>Become an Affiliate</span>
            </div>
            <div className="mt-4 text-[10px] text-gray-700">Ac 2025 LoveIQ &gt; Designed based on User Request</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitlistModal;
