import type { FC } from "react";

const bullets = [
  {
    title: "Struggling to explain?",
    description: "Desire is complex. Without the right words, needs go unmet and frustrations build silently.",
    icon: "arrow",
  },
  {
    title: "Tired of vague advice?",
    description: "Generic tips don’t work for unique psychologies. You need insights tailored to your emotional blueprint.",
    icon: "lock",
  },
];

const ValueFeaturesSection: FC = () => {
  return (
    <section className="section-shell relative overflow-hidden bg-[#0A0510] px-4 text-text-primary" aria-labelledby="value-heading">
      <div className="pointer-events-none absolute inset-0" />

      <div className="content-shell relative grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div className="pointer-events-none absolute -left-[302px] top-[52.275px] h-[160px] w-[160px] rounded-full bg-[#FE6839] mix-blend-screen blur-[99.5px]" />
        <div className="pointer-events-none absolute -right-[1014.5px] bottom-[136px] h-[257px] w-[257px] rounded-full bg-[#541475] mix-blend-screen blur-[100px]" />
        <div className="relative space-y-8 order-1 lg:order-2">
          <h2 id="value-heading" className="font-serif text-[34px] leading-tight text-white sm:text-[38px] lg:text-[44px]">
            Great intimacy requires a vocabulary most of us were never taught.
          </h2>
          <div className="space-y-6">
            {bullets.map((item) => (
              <div key={item.title} className="group flex gap-3 rounded-2xl bg-transparent p-4">
                <div
                  className="mt-0.5 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-[#2E0147]/10 bg-[#541475] text-white shadow-[0_10px_28px_rgba(0,0,0,0.2)] transition-colors duration-300 group-hover:bg-white group-hover:text-[#541475] dark:border-white/10 dark:bg-[#a78bfa] dark:text-[#0b0714] dark:group-hover:bg-[#1e102e] dark:group-hover:text-[#a78bfa]"
                  aria-hidden
                >
                  {item.icon === "arrow" ? (
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#a78bfa]">
                      <path d="M24 24.3234H8.9644C8.30923 24.3235 7.68095 24.5809 7.21774 25.0389L4.4977 27.7275C4.25172 27.9888 3.8674 28.0715 3.5338 27.9349C3.20021 27.7983 2.98759 27.4712 3.00056 27.1146V7.22953C3.00054 6.26627 3.5734 5.39301 4.46311 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1 1L26.5 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 3H24.1523C25.724 3 27 4.20886 27 5.69784V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#a78bfa]">
                      <path
                        d="M3.19748 14.4785C0.958739 12.1228 0.368225 8.58644 1.71419 5.5958C3.06017 2.60516 6.06198 0.783745 9.25429 1.02069C12.4466 1.25764 15.1638 3.50354 16.0795 6.66205H18.0486C20.2294 6.66179 22.1534 8.13129 22.7864 10.2806C23.4194 12.4298 22.6123 14.7526 20.7988 16.0001"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <div className="space-y-1">
                  <p className="text-[17px] font-semibold text-white">{item.title}</p>
                  <p className="text-sm leading-relaxed text-white/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[#0A0510] shadow-[0_30px_90px_rgba(0,0,0,0.55)] h-[640px] order-2 lg:order-1">
          <div className="relative h-full w-full overflow-hidden rounded-[20px]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/8060391-uhd_4096_2160_25fps.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.35),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(0,0,0,0.28),transparent_58%)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueFeaturesSection;
