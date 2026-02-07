import Image from "next/image";
import Link from "next/link";
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
    title: "Clarify your inner landscape.",
    description:
      "Turn inward, and map out the desires, boundaries, and emotions you've never fully named. LoveIQ guides us with thoughtful questions so we can give language to what we feel and want.",
    mobileLines: [
      "Turn inward, and map out the desires,",
      "boundaries, and emotions you've never",
      "fully named. LoveIQ guides us with",
      "thoughtful questions so we can give",
      "language to what we feel and want.",
    ],
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
      "Discover patterns that belong only to you\u2014no generic horoscopes here. Our science based report reveals how our mind, body, and heart connect so we can understand ourself.",
    mobileLines: [
      "Discover patterns that belong only to",
      "you\u2014no generic horoscopes here. Our",
      "science based report reveals how our",
      "mind, body, and heart connect so we",
      "can understand ourself.",
    ],
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

const S06SampleProfile: FC = () => {
  return (
    <section className="relative mt-0 overflow-hidden bg-[#0A0510] px-4 pb-24 pt-14 text-white">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-14">
{/* Hidden: LoveIQ Gives You Language section
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

        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#1E102E] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] backdrop-blur-[12px]">
          <div className="relative">
            <div className="flex items-center gap-3 border-b border-white/5 px-6 py-4">
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
        End hidden section */}

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative space-y-7">
            <h3 className="font-serif text-4xl leading-tight sm:text-5xl md:text-[46px]">
              <span className="block md:whitespace-nowrap">Let&apos;s explore our desires</span>
              <span className="block md:whitespace-nowrap">and connection.</span>
            </h3>
            <div className="space-y-6">
              {explorationBullets.map((item) => (
                <div key={item.title} className="group flex gap-4">
                  <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#241433]/80 text-[#cbb8ff] shadow-[0_16px_50px_rgba(0,0,0,0.35)] transition duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-[1.03] group-hover:border-white/20 group-hover:bg-gradient-to-br group-hover:from-[#f26d4f] group-hover:via-[#9c7dff] group-hover:to-[#5d7cff] group-hover:text-[#0d0715]">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <p className="font-serif text-lg font-semibold text-white">{item.title}</p>
                    <p className="text-[15px] leading-relaxed text-white/70">
                      {item.mobileLines ? (
                        <>
                          <span className="hidden sm:inline">{item.description}</span>
                          <span className="sm:hidden">
                            {item.mobileLines.map((line, idx) => (
                              <span key={line + idx} className="block">
                                {line}
                              </span>
                            ))}
                          </span>
                        </>
                      ) : (
                        item.description
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center px-2 sm:px-0">
            <div className="relative w-full max-w-[320px] overflow-hidden rounded-[34px] shadow-[0_34px_120px_rgba(0,0,0,0.5)] sm:max-w-[380px] md:max-w-[420px]">
              <div className="relative aspect-square w-full overflow-hidden rounded-[34px] sm:aspect-auto sm:h-[600px]">
                <Image
                  src="/762ab2dcc4e38a7a2824b7a4f5174f2627a7eaae.webp"
                  alt="Couple illustration"
                  fill
                  priority
                  sizes="(max-width: 640px) 95vw, (max-width: 1024px) 480px, 540px"
                  className="object-cover object-[50%_10%] sm:object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* LoveIQ Gives You Language Section */}
        <div className="relative mt-16 pt-16 pb-8">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[600px] rounded-full bg-[rgba(46,1,71,0.2)] blur-[60px] mix-blend-screen" />

          {/* Section Header */}
          <div className="relative z-10 mb-28 flex flex-col items-center gap-8 text-center">
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.025em] text-white sm:text-5xl md:text-[60px]">
              LoveIQ Gives You{" "}
              <span className="italic text-[#fe6839]">Language.</span>
            </h2>
            <p className="max-w-[944px] text-lg leading-7 text-[#d1d5db] sm:text-xl">
              Stop guessing. Get clarity, vocabulary, and a deeper understanding of<br className="hidden sm:block" />{" "}
              the terms that define your connection. We decode the complex<br className="hidden sm:block" />{" "}
              science of intimacy.
            </p>
          </div>

          {/* Glossary Interface Mockup */}
          <div className="relative mx-auto max-w-[1232px]">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[rgba(15,8,21,0.8)] shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_25px_50px_-12px_rgba(0,0,0,0.25)] backdrop-blur-[12px]">
              {/* Top gloss line */}
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="flex min-h-[480px] flex-col lg:h-[550px] lg:flex-row">
                {/* Sidebar Navigation - Hidden on mobile */}
                <div className="hidden w-[340px] border-r border-white/5 bg-[rgba(10,5,16,0.5)] lg:block">
                  {/* Search Header */}
                  <div className="border-b border-white/5 bg-[rgba(10,5,16,0.2)] px-5 py-5 backdrop-blur-sm">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search terminology..."
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-xs font-medium text-white/60 placeholder-[#6b7280] shadow-[inset_0_2px_4px_1px_rgba(0,0,0,0.2)] outline-none focus:border-white/20"
                        readOnly
                      />
                      <svg
                        className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7280]"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M12 12L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="mt-3 flex items-center justify-between px-1">
                      <span className="text-[10px] font-bold uppercase tracking-[1px] text-[#6b7280]">Recent Terms</span>
                      <span className="text-[10px] font-medium text-[#fe6839]">Filter</span>
                    </div>
                  </div>

                  {/* Term List */}
                  <div className="space-y-1 p-3">
                    {/* Active Item */}
                    <div className="relative flex items-center justify-between overflow-hidden rounded-xl border border-[rgba(254,104,57,0.2)] bg-[rgba(254,104,57,0.1)] px-4 py-3 shadow-[0_0_15px_0_rgba(254,104,57,0.1)]">
                      <div className="absolute bottom-0 left-0 top-0 w-[2px] bg-[#fe6839]" />
                      <div className="space-y-0.5">
                        <p className="font-serif text-sm font-bold text-white">Responsive Desire</p>
                        <p className="text-[10px] font-medium tracking-[0.25px] text-[#fe6839]">Physiology</p>
                      </div>
                      <svg className="h-4 w-4 text-[#fe6839]" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    {/* Inactive Items */}
                    {[
                      { term: "Attachment Theory", category: "Psychology" },
                      { term: "The 5 Love Languages", category: "Expression" },
                      { term: "Compersion", category: "Ethics" },
                      { term: "Limerence", category: "Neuroscience" },
                      { term: "Erotic Intelligence", category: "Sexology" },
                    ].map((item, index) => (
                      <div
                        key={item.term}
                        className={`rounded-xl px-4 py-3 ${index >= 4 ? "opacity-40" : ""}`}
                      >
                        <div className="space-y-0.5">
                          <p className="font-serif text-sm font-medium text-[#9ca3af]">{item.term}</p>
                          <p className="text-[10px] font-medium tracking-[0.25px] text-[#4b5563]">{item.category}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Definition Content Area */}
                <div
                  className="relative flex-1"
                  style={{
                    background: "linear-gradient(141deg, rgb(22, 13, 33) 0%, rgb(10, 5, 16) 100%)",
                  }}
                >
                  {/* Subtle radial glow */}
                  <div className="pointer-events-none absolute left-0 top-0 h-[200px] w-[200px] rounded-full bg-[rgba(46,1,71,0.2)] blur-[60px]" />

                  <div className="relative p-5 sm:p-6 lg:p-10">
                    {/* Back to Glossary */}
                    <div className="mb-4 flex items-center gap-2">
                      <svg className="h-3.5 w-3.5 text-[#6b7280]" viewBox="0 0 14 14" fill="none">
                        <path d="M9 11L5 7L9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-[10px] font-bold uppercase tracking-[1px] text-[#6b7280]">Back to Glossary</span>
                    </div>

                    <div className="flex gap-10">
                      {/* Main Content Column */}
                      <div className="flex-1 space-y-4">
                        {/* Heading */}
                        <h3 className="font-serif text-2xl leading-[1.1] tracking-[-0.025em] text-white sm:text-3xl lg:text-[42px]">
                          Importance of<br className="hidden sm:block" /> Sexuality
                        </h3>

                        {/* Pills */}
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full border border-[rgba(254,104,57,0.3)] bg-[rgba(254,104,57,0.1)] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.5px] text-[#fe6839] sm:px-3 sm:text-[10px]">
                            Trait &amp; Disposition
                          </span>
                          <span className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.5px] text-[#9ca3af] sm:inline-flex">
                            Relationship Dynamics &amp; Intimacy
                          </span>
                          <span className="flex items-center gap-1.5 rounded-full border border-[rgba(236,72,153,0.3)] bg-[rgba(236,72,153,0.1)] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.5px] text-[#f472b6] sm:px-3 sm:text-[10px]">
                            <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                              <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            Sensitive Topic
                          </span>
                        </div>

                        {/* Definition */}
                        <p className="font-serif text-base leading-7 text-[#e5e7eb] sm:text-lg lg:text-xl">
                          How central sex and sexual connection are to a person&apos;s overall relationship satisfaction and sense of wellbeing.
                        </p>

                        {/* What This Really Means */}
                        <div className="space-y-3 pt-2">
                          <div className="flex items-center gap-2">
                            <svg className="h-4 w-4 text-[#fe6839]" viewBox="0 0 18 18" fill="none">
                              <path d="M9 1.5V16.5M9 1.5L5 5.5M9 1.5L13 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="font-serif text-base font-bold text-white">What This Really Means</span>
                          </div>
                          <div className="space-y-3 text-sm leading-[1.55] text-[#9ca3af]">
                            <p>For some people, sexual connection is a primary bonding channel; for others, it is secondary to emotional intimacy, companionship, or shared goals.</p>
                            <p className="hidden sm:block">Importance can shift with health, aging, parenting, and life stress, and it is also shaped by culture and values.</p>
                          </div>
                        </div>
                      </div>

                      {/* Sidebar Column */}
                      <div className="hidden w-[180px] flex-shrink-0 space-y-6 lg:block">
                        {/* Related Terms */}
                        <div className="space-y-3">
                          <span className="font-serif text-sm font-bold text-white">Related Terms</span>
                          <div className="flex flex-col gap-2">
                            {["Relationship Satisfaction", "Sexual Needs", "Sexual Frequency Expectations", "Affection Gap", "Emotional Intimacy"].map((term) => (
                              <span key={term} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-[#9ca3af]">
                                {term}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="space-y-3">
                          <span className="font-serif text-sm font-bold text-white">Tags</span>
                          <div className="flex flex-wrap gap-x-2 gap-y-1.5">
                            {["#importance-of-sex", "#sexual-priorities", "#relationship-satisfaction", "#libido-compatibility", "#intimacy-needs", "#life-stages"].map((tag) => (
                              <span key={tag} className="text-[10px] font-medium tracking-[0.25px] text-[#fe6839]">{tag}</span>
                            ))}
                          </div>
                        </div>

                        {/* Inside LoveIQ Box */}
                        <div className="relative overflow-hidden rounded-xl border border-[#2e0147] bg-[#1a0f24] p-4">
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(46,1,71,0.2)] to-transparent" />
                          <div className="relative space-y-2">
                            <span className="font-serif text-xs font-bold uppercase tracking-[0.7px] text-[#a78bfa]">Inside LoveIQ</span>
                            <p className="text-[11px] leading-[1.5] text-[#9ca3af]">
                              We identify patterns related to Importance of Sexuality by analyzing responses in our assessment modules.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top blur overlay - subtle blur for upper portion */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-[250px] rounded-t-3xl"
              style={{
                background: "linear-gradient(180deg, rgba(167, 139, 250, 0.03) 0%, rgba(167, 139, 250, 0.02) 50%, rgba(167, 139, 250, 0.00) 100%)",
                backdropFilter: "blur(1.5px)",
                WebkitBackdropFilter: "blur(1.5px)",
              }}
            />

            {/* Bottom blur overlay - original Figma specs */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[380px]"
              style={{
                borderRadius: "58px 58px 24px 24px",
                background: "linear-gradient(180deg, rgba(167, 139, 250, 0.00) 0.11%, rgba(167, 139, 250, 0.00) 24.82%, rgba(167, 139, 250, 0.01) 36.43%, rgba(167, 139, 250, 0.02) 51.68%, rgba(167, 139, 250, 0.03) 84.06%, rgba(167, 139, 250, 0.12) 99.89%)",
                filter: "blur(2px)",
                backdropFilter: "blur(2.55px)",
                WebkitBackdropFilter: "blur(2.55px)",
              }}
            />
          </div>

          {/* Bottom Link Button */}
          <div className="mt-16 flex justify-center">
            <Link
              href="/glossary"
              className="group inline-flex items-center gap-2 rounded-full border border-[#fe6839] px-8 py-4 text-base font-bold text-[#fe6839] transition-colors hover:bg-[#fe6839]/10"
            >
              Browse full glossary
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Bottom ambient glow */}
          <div className="pointer-events-none absolute bottom-0 left-1/3 right-1/4 h-[300px] rounded-full bg-[rgba(254,104,57,0.05)] blur-[60px] mix-blend-screen" />
        </div>
      </div>
    </section>
  );
};

export default S06SampleProfile;
