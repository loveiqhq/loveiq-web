import type { FC } from "react";

const archetypeStats = [
  { label: "Emotional Resonance", value: 85, tone: "from-[#f26d4f] to-[#f9a860]" },
  { label: "Spontaneous Desire", value: 45, tone: "from-[#f9a860] to-[#f7d4a5]" },
];

const archetypeInsights = [
  {
    title: "Communication Style",
    description: "You prefer direct, verbal affirmation over physical cues.",
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
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M15 10h6" />
        <path d="M15 6h6" />
      </svg>
    ),
    tone: "from-[#5d7cff] to-[#a7c1ff]",
  },
  {
    title: "Growth Area",
    description: "Experiment with initiating intimacy in low-stakes environments.",
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
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
    ),
    tone: "from-[#f26d4f] to-[#fbb25d]",
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
    tone: "from-[#7b6b9e] to-[#c4b8e2]",
  },
];

const explorationBullets = [
  {
    title: "Explore your inner landscape.",
    description:
      "Turn inward and map out the desires, boundaries, and emotions you've never fully named. The guided questions give you language you can grow with.",
  },
  {
    title: "Uncover your unique erotic signature.",
    description:
      "Discover patterns that belong only to you -- no horoscopes here. Our science-based lens connects your mind, body, and heart so you can express yourself on your own terms.",
  },
];

const Section05: FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#050208] px-4 pb-24 pt-14 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.04),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(124,88,255,0.08),transparent_35%),radial-gradient(circle_at_50%_70%,rgba(242,109,79,0.06),transparent_45%)]" />
        <div className="absolute inset-0 bg-noise opacity-25" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-14">
        <div className="space-y-3 text-center">
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
            LoveIQ Gives You{" "}
            <span className="italic bg-gradient-to-r from-[#5d7cff] via-[#9c7dff] to-[#f26d4f] bg-clip-text text-transparent">
              Language.
            </span>
          </h2>
          <p className="text-sm text-white/70 sm:text-base">
            Stop guessing. Get clarity, vocabulary, and an actionable roadmap designed for your personal growth.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#13091c]/95 via-[#0d0715]/95 to-[#120a1c]/95 p-8 shadow-[0_26px_120px_rgba(0,0,0,0.55)] backdrop-blur">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(242,109,79,0.12),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(93,124,255,0.12),transparent_40%)]" />
            <div className="absolute inset-0 bg-noise opacity-10" />
          </div>
          <div className="relative grid gap-8 md:grid-cols-[1.2fr_1fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                Your Archetype
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl">The Deep Connector</h3>
                <p className="text-sm text-white/70 sm:text-base">
                  You thrive on emotional safety before physical intensity. Your arousal network is heavily tied to the Trust &
                  Verify neural pathways.
                </p>
              </div>
              <div className="space-y-5">
                {archetypeStats.map((stat) => (
                  <div key={stat.label} className="space-y-2">
                    <div className="flex items-center justify-between text-[13px] font-semibold text-white/70">
                      <span>{stat.label}</span>
                      <span>{stat.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${stat.tone}`}
                        style={{ width: `${stat.value}%` }}
                        aria-hidden
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 rounded-2xl bg-white/5 p-1 backdrop-blur">
              {archetypeInsights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/5 p-4 text-sm shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
                >
                  <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.tone} text-[#0c0816]`}>
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-b from-white/5 via-white/10 to-white/0 p-8 shadow-[0_20px_100px_rgba(0,0,0,0.55)]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(93,124,255,0.08),transparent_45%),radial-gradient(circle_at_80%_50%,rgba(242,109,79,0.08),transparent_45%)]" />
              <div className="absolute inset-0 bg-noise opacity-12" />
            </div>
            <div className="relative space-y-6">
              <h3 className="font-serif text-3xl leading-tight sm:text-4xl">
                Embark on an exploration of your desires and connection.
              </h3>
              <div className="space-y-5">
                {explorationBullets.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f26d4f] via-[#9c7dff] to-[#5d7cff] text-[#0d0715] shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                      <svg
                        aria-hidden
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <p className="text-lg font-semibold text-white">{item.title}</p>
                      <p className="text-sm leading-relaxed text-white/70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 -z-10 rounded-[30px] bg-gradient-to-b from-white/10 via-[#9c7dff]/10 to-transparent blur-[60px]" aria-hidden />
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#ff8a5a] via-[#f26d4f] to-[#8a82ff] p-1 shadow-[0_26px_120px_rgba(0,0,0,0.55)]">
              <div className="rounded-[24px] bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.35),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.35),transparent_50%),linear-gradient(180deg,rgba(255,255,255,0.15),rgba(255,255,255,0.05))] p-6 backdrop-blur">
                <div className="aspect-[3/4] w-64 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_45%),radial-gradient(circle_at_70%_40%,rgba(255,255,255,0.2),transparent_50%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.18),transparent_50%),linear-gradient(135deg,rgba(255,255,255,0.25),rgba(255,255,255,0.05))] opacity-90" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section05;
