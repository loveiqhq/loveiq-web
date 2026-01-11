import Image from "next/image";
import type { FC } from "react";

const archetypeStats = [
  { label: "Emotional Resonance", value: 85, status: "High", gradient: "from-[#541475] to-[#fe6839]" },
  { label: "Spontaneous Desire", value: 45, status: "Moderate", gradient: "from-[#fe6839] to-[#fdba74]" },
];

const archetypeInsights = [
  {
    title: "Communication Style",
    description: "You prefer direct, verbal affirmation over physical cues.",
    icon: (
      <svg
        aria-hidden
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.1675 8.33333C18.9517 12.1821 16.942 16.056 13.3438 17.6311C9.74557 19.2062 5.53598 18.0549 3.24023 14.8679C0.944472 11.6808 1.18591 7.32327 3.81971 4.40931C6.45351 1.49535 10.7645 0.816164 14.1667 2.77917"
          stroke="#A78BFA"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 9.16666L10 11.6667L18.3333 3.33333"
          stroke="#A78BFA"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    tone: "from-[#453064] to-[#302046]",
  },
  {
    title: "Growth Area",
    description: "Experiment with initiating intimacy in low-stakes environments.",
    icon: (
      <svg
        aria-hidden
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 11.6667C12.6667 10.8333 13.0833 10.25 13.75 9.58332C14.5833 8.83332 15 7.74999 15 6.66666C15 3.90708 12.7596 1.66666 10 1.66666C7.24042 1.66666 5 3.90708 5 6.66666C5 7.49999 5.16667 8.49999 6.25 9.58332C6.83333 10.1667 7.33333 10.8333 7.5 11.6667"
          stroke="#FE6839"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M7.5 15H12.5" stroke="#FE6839" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.33334 18.3333H11.6667" stroke="#FE6839" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tone: "from-[#5c2229] to-[#3c151e]",
  },
  {
    title: "Locked Insight",
    description: "Upgrade to unlock advanced relationship dynamics.",
    icon: (
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    tone: "from-[#3b304e] to-[#282038]",
  },
];

const explorationBullets = [
  {
    title: "Explore your inner landscape.",
    description:
      "Turn inward and map out the desires, boundaries, and emotions you've never fully named. The guided questions give you language you can grow with.",
      icon: (
        <svg
          aria-hidden
          className="h-7 w-7"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.33331 14C2.33331 20.439 7.56097 25.6667 14 25.6667C20.439 25.6667 25.6666 20.439 25.6666 14C25.6666 7.56103 20.439 2.33337 14 2.33337C7.56097 2.33337 2.33331 7.56103 2.33331 14V14"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.9467 9.05334L16.4733 16.4733L9.05334 18.9467L11.5267 11.5267L18.9467 9.05334V9.05334"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Uncover your unique erotic signature.",
    description:
      "Discover patterns that belong only to you -- no horoscopes here. Our science-based lens connects your mind, body, and heart so you can express yourself on your own terms.",
      icon: (
        <svg
          aria-hidden
          className="h-7 w-7"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 11.6666C12.7122 11.6666 11.6667 12.7122 11.6667 14C11.6667 15.19 11.55 16.9283 11.3633 18.6666"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.3334 15.3066C16.3334 18.0833 16.3334 22.75 15.1667 25.6666"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.1717 24.5233C20.3117 23.8233 20.6734 21.84 20.755 21"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.33331 14.0001C2.33331 8.97837 5.54666 4.52009 10.3107 2.93209C15.0746 1.34409 20.3203 2.98271 23.3333 7.00006"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M2.33331 18.6666H2.34498" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M25.4333 18.6666C25.6667 16.3333 25.5862 12.4203 25.4333 11.6666"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.83331 22.75C6.41665 21 6.99998 17.5 6.99998 14C6.9988 13.2053 7.13294 12.4163 7.39665 11.6666"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.0917 25.6667C10.3367 24.8967 10.6167 24.1267 10.7567 23.3334"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 7.93331C12.6665 6.68248 15.3358 6.6829 17.5019 7.93443C19.668 9.18595 21.0016 11.4983 21 14V16.3333"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const Section05: FC = () => {
  return (
    <section className="relative mt-0 overflow-hidden bg-[#0A0510] px-4 pb-24 pt-14 text-white">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-14">
        <div className="space-y-6 text-center">
          <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
            LoveIQ Gives You{" "}
            <span className="italic bg-gradient-to-r from-[#A78BFA] via-[#CBB9FF] to-[#E9D5FF] bg-clip-text text-transparent">
              Language.
            </span>
          </h2>
          <p className="text-sm text-white/70 sm:text-base">
            Stop guessing. Get clarity, vocabulary, and an actionable roadmap
            <br />
            designed for your personal growth.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-[#1a0f28] via-[#150c20] to-[#12091c] shadow-[0_26px_120px_rgba(0,0,0,0.65)]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,88,255,0.08),transparent_35%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(254,104,57,0.14),transparent_40%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_60%,rgba(111,63,255,0.08),transparent_45%)]" />
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-white/5 bg-white/5">
            <div className="flex items-center gap-3 border-b border-white/5 bg-black/20 px-6 py-4 backdrop-blur">
              <span className="h-3 w-3 rounded-full bg-[#fe6839]/60" />
              <span className="h-3 w-3 rounded-full bg-[#541475]/60" />
              <span className="h-3 w-3 rounded-full bg-[#2e0147]/60" />
              <span className="ml-2 text-sm font-semibold tracking-wide text-white/60">LoveIQ_Personal_Report.pdf</span>
            </div>

            <div className="grid gap-10 px-6 pb-10 pt-8 sm:px-10 md:grid-cols-2">
              <div className="space-y-8">
                <div className="inline-flex items-center rounded-full bg-[#2f1e46] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#c4b8ff] shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                  Your Archetype
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-3xl leading-tight text-white sm:text-[34px]">The Deep Connector</h3>
                  <p className="text-[15px] leading-relaxed text-white/80 sm:text-base">
                    You thrive on emotional safety before physical intensity. Your arousal network is heavily tied to the &quot;Trust
                    &amp; Verify&quot; neural pathways.
                  </p>
                </div>

                <div className="space-y-5">
                  {archetypeStats.map((stat) => (
                    <div key={stat.label} className="space-y-3">
                      <div className="h-3 rounded-full bg-white/10">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${stat.gradient} shadow-[0_1px_2px_rgba(0,0,0,0.2)]`}
                          style={{ width: `${stat.value}%` }}
                          aria-hidden
                        />
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
                        <span>{stat.label}</span>
                        <span>
                          {stat.value}% ({stat.status})
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#231330]/90 via-[#1f102c]/92 to-[#160b22]/95 px-5 py-6 shadow-[0_18px_80px_rgba(0,0,0,0.45)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(254,104,57,0.18),transparent_45%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_100%,rgba(92,34,41,0.18),transparent_35%)]" />
                <div className="relative grid gap-4">
                  {archetypeInsights.map((item, index) => (
                    <div
                      key={item.title}
                      className={`flex items-start gap-4 rounded-[18px] border border-white/5 bg-[#2a1838]/80 p-5 text-sm shadow-[0_16px_50px_rgba(0,0,0,0.35)] transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.015] hover:border-white/10 hover:shadow-[0_22px_70px_rgba(0,0,0,0.5)] ${
                        index === archetypeInsights.length - 1 ? "opacity-60 hover:opacity-80" : ""
                      }`}
                    >
                      <div
                        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.tone} text-[#f0eaff]`}
                      >
                        {item.icon}
                      </div>
                      <div className="space-y-1">
                        <p className="font-serif text-lg font-semibold text-white">{item.title}</p>
                        <p className="text-[13px] leading-relaxed text-white/70">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative space-y-7">
            <h3 className="font-serif text-4xl leading-tight sm:text-5xl md:text-[46px]">
              <span className="block whitespace-nowrap">Embark on an exploration of</span>
              <span className="block whitespace-nowrap">your desires and connection.</span>
            </h3>
            <div className="space-y-6">
              {explorationBullets.map((item) => (
                <div key={item.title} className="group flex gap-4">
                  <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#241433]/80 text-[#cbb8ff] shadow-[0_16px_50px_rgba(0,0,0,0.35)] transition duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-[1.03] group-hover:border-white/20 group-hover:bg-gradient-to-br group-hover:from-[#f26d4f] group-hover:via-[#9c7dff] group-hover:to-[#5d7cff] group-hover:text-[#0d0715]">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <p className="font-serif text-lg font-semibold text-white">{item.title}</p>
                    <p className="text-[15px] leading-relaxed text-white/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-[320px] overflow-hidden rounded-[34px] shadow-[0_34px_120px_rgba(0,0,0,0.5)] sm:w-[380px] md:w-[420px]">
              <div className="relative h-[520px] w-full overflow-hidden rounded-[34px] sm:h-[600px]">
                <Image
                  src="/762ab2dcc4e38a7a2824b7a4f5174f2627a7eaae.webp"
                  alt="Couple illustration"
                  fill
                  priority
                  sizes="(max-width: 640px) 95vw, (max-width: 1024px) 480px, 540px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section05;
