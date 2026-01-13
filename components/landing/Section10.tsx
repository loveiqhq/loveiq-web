import type { FC } from "react";

const Section10: FC = () => {
  return (
    <section className="section-shell relative overflow-hidden bg-[#0A0510] px-4 text-text-primary" aria-labelledby="why-heading">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-120px] top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[#fe6839]/10 blur-[90px]" />
        <div className="absolute left-[-80px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#541475]/10 blur-[100px]" />
      </div>

      <div className="content-shell relative flex flex-col items-center gap-12 animate-on-scroll">
        <div className="max-w-5xl space-y-4 text-center">
          <h2 id="why-heading" className="font-serif text-4xl leading-tight text-white sm:text-5xl md:text-[52px] md:leading-[1.15]">
            Why we created <span className="bg-gradient-to-r from-[#fe6839] to-[#a78bfa] bg-clip-text text-transparent">LoveIQ?</span>
          </h2>
          <p className="mx-auto max-w-[940px] font-medium text-[20px] leading-[28px] text-center text-[#d1d5db]">
            Positive sexual well-being is highly linked to lower stress, anxiety, and depression, better cardiovascular health, and
            higher relationship satisfaction. Therefore we want to make sexuality something we can explore with curiosity, confidence,
            and care — not shame or confusion.
          </p>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-3 animate-on-scroll">
          {/* Card 1 - Women/Men bars - Purple hover */}
          <div className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-[#150A22] p-3 shadow-[0_10px_44px_-3px_rgba(167,139,250,0.1),0_4px_6px_-5px_#A78BFA] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_44px_-3px_rgba(167,139,250,0.25),0_4px_6px_-5px_#A78BFA]">
            <div className="pointer-events-none absolute inset-[-1px] rounded-[40px] bg-gradient-to-b from-[#A78BFA]/30 to-transparent opacity-0 blur-[4px] transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
            <div className="relative flex flex-col">
              {/* Inner black box */}
              <div className="relative flex h-[200px] flex-col rounded-[24px] border border-white/5 bg-[#0A0510] px-5 pt-4 pb-5">
                {/* Dots inside inner box */}
                <div className="mb-4 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#fe6839]" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>

                <div className="flex flex-1 flex-col items-center justify-center gap-4">
                  <div className="flex w-full max-w-[220px] items-center justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
                    <span>Women</span>
                    <span>Men</span>
                  </div>

                  <div className="relative flex w-full max-w-[220px] flex-col gap-4">
                    <div className="relative h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="absolute inset-y-0 left-0 w-[42%] rounded-full bg-gradient-to-r from-[#541475] to-[#8b5cf6] shadow-[0_0_12px_rgba(139,92,246,0.35)] transition-transform duration-500 group-hover:scale-[1.02] origin-left" />
                      <div className="absolute inset-y-0 right-0 w-[54%] rounded-full bg-gradient-to-l from-[#a78bfa] to-[#8b5cf6] opacity-70 transition-transform duration-500 group-hover:scale-[1.02] origin-right" />
                    </div>
                    <div className="relative">
                      <span className="absolute -top-12 left-[42%] -translate-x-1/2 rounded-md bg-[#541475] px-2 py-1 text-[10px] font-bold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100">
                        42%
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 block h-2 w-2 rotate-45 bg-[#541475]" />
                      </span>
                      <span className="absolute -top-2 right-[28%] translate-x-1/2 rounded-md border border-white/10 bg-[#1e102e] px-2 py-1 text-[10px] font-bold text-[#a78bfa] opacity-0 shadow-lg transition-all duration-300 delay-75 group-hover:translate-y-0 group-hover:opacity-100">
                        54%
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 block h-2 w-2 rotate-45 border-l border-t border-white/10 bg-[#2a1838]" />
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-white/70">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] transition-colors duration-300 group-hover:bg-[#541475]/20">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11.0833 12.25V11.0833C11.0833 9.79553 10.0378 8.75 8.75 8.75H5.25001C3.9622 8.75 2.91667 9.79553 2.91667 11.0833V12.25"
                          stroke="#F3F4F6"
                          strokeWidth="1.16667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.66667 4.08333C4.66667 5.37113 5.7122 6.41667 7.00001 6.41667C8.28781 6.41667 9.33334 5.37113 9.33334 4.08333C9.33334 2.79553 8.28781 1.75 7.00001 1.75C5.7122 1.75 4.66667 2.79553 4.66667 4.08333V4.08333"
                          stroke="#F3F4F6"
                          strokeWidth="1.16667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors duration-300 delay-75 group-hover:bg-[#8b5cf6]/20">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9.33334 12.25V11.0833C9.33334 9.79553 8.28781 8.75 7 8.75H3.50001C2.2122 8.75 1.16667 9.79553 1.16667 11.0833V12.25"
                          stroke="#F3F4F6"
                          strokeWidth="1.16667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.91667 4.08333C2.91667 5.37113 3.9622 6.41667 5.25001 6.41667C6.53781 6.41667 7.58334 5.37113 7.58334 4.08333C7.58334 2.79553 6.53781 1.75 5.25001 1.75C3.9622 1.75 2.91667 2.79553 2.91667 4.08333H2.91667"
                          stroke="#F3F4F6"
                          strokeWidth="1.16667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.8333 12.2499V11.0832C12.8325 10.0198 12.1129 9.09152 11.0833 8.82568"
                          stroke="#F3F4F6"
                          strokeWidth="1.16667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.33333 1.82568C10.3658 2.09003 11.0879 3.02034 11.0879 4.0861C11.0879 5.15186 10.3658 6.08217 9.33333 6.34652"
                          stroke="#F3F4F6"
                          strokeWidth="1.16667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text below inner box */}
              <div className="mt-5 space-y-2 px-4 pb-4 text-center">
                <p className="text-xl font-semibold text-white">42% - 54%</p>
                <p className="text-sm leading-relaxed text-text-secondary">of women and men in long-term relationships report sexual dissatisfaction.</p>
              </div>
            </div>
          </div>

          {/* Card 2 - Satisfaction circle - Orange hover */}
          <div className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-[#150A22] p-3 shadow-[0_10px_44px_-3px_rgba(167,139,250,0.1),0_4px_6px_-5px_#A78BFA] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_44px_-3px_rgba(254,104,57,0.25),0_4px_6px_-5px_#fe6839]">
            <div className="pointer-events-none absolute inset-[-1px] rounded-[40px] bg-gradient-to-b from-[#fe6839]/30 to-transparent opacity-0 blur-[4px] transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
            <div className="relative flex flex-col">
              {/* Inner black box */}
              <div className="relative flex h-[200px] flex-col rounded-[24px] border border-white/5 bg-[#0A0510] px-5 pt-4 pb-5">
                {/* Dots inside inner box */}
                <div className="mb-2 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#8b5cf6]" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>

                <div className="flex flex-1 items-center justify-center">
                  <div className="relative flex h-28 w-28 items-center justify-center">
                    <svg
                      className="h-full w-full -rotate-90 transition-transform duration-700 group-hover:scale-105"
                      viewBox="0 0 120 120"
                      fill="none"
                    >
                      <defs>
                        <linearGradient id="gaugeArc" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#fe8458" />
                          <stop offset="100%" stopColor="#fe6839" />
                        </linearGradient>
                      </defs>
                      <circle cx="60" cy="60" r="48" stroke="#2a2432" strokeWidth="8" />
                      <circle
                        cx="60"
                        cy="60"
                        r="48"
                        stroke="url(#gaugeArc)"
                        strokeWidth="8"
                        strokeDasharray="301.59"
                        strokeDashoffset="241"
                        strokeLinecap="round"
                        className="drop-shadow-[0_0_12px_rgba(254,104,57,0.45)]"
                      />
                    </svg>
                    <div className="absolute inset-[10px] rounded-full border border-[#26212f] bg-[#0f0a18]" />
                    <div className="absolute inset-0 flex items-center justify-center text-center">
                      <div className="leading-tight">
                        <p className="text-xl font-semibold text-white">20%</p>
                        <p className="text-[8px] uppercase tracking-[0.15em] text-white/55">Satisfaction</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-[10px] border border-white/10 bg-[#1e102e]/90 px-2.5 py-1.5 text-[10px] font-semibold text-white shadow-[0_16px_30px_rgba(0,0,0,0.25)] transition-all duration-500 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-[#fe6839]" />
                  <span>Live Data</span>
                </div>
              </div>

              {/* Text below inner box */}
              <div className="mt-5 space-y-2 px-4 pb-4 text-center">
                <p className="text-xl font-semibold text-white">Only 20%</p>
                <p className="text-sm leading-relaxed text-text-secondary">of adults say they're satisfied with their sex life.</p>
              </div>
            </div>
          </div>

          {/* Card 3 - Fulfillment gap - Purple hover */}
          <div className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-[#150A22] p-3 shadow-[0_10px_44px_-3px_rgba(167,139,250,0.1),0_4px_6px_-5px_#A78BFA] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_44px_-3px_rgba(167,139,250,0.25),0_4px_6px_-5px_#A78BFA]">
            <div className="pointer-events-none absolute inset-[-1px] rounded-[40px] bg-gradient-to-b from-[#A78BFA]/30 to-transparent opacity-0 blur-[4px] transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
            <div className="relative flex flex-col">
              {/* Inner black box */}
              <div className="relative flex h-[200px] flex-col rounded-[24px] border border-white/5 bg-[#0A0510] px-5 pt-4 pb-5">
                {/* Dots inside inner box */}
                <div className="mb-2 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#541475]" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>

                <div className="flex flex-1 flex-col items-center justify-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#2e0147] to-[#541475] text-white shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:rotate-6">
                    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M22.1667 16.3333C23.905 14.63 25.6667 12.5883 25.6667 9.91667C25.6667 6.37521 22.7914 3.5 19.25 3.5C17.1967 3.5 15.75 4.08333 14 5.83333C12.25 4.08333 10.8033 3.5 8.74999 3.5C5.20854 3.5 2.33333 6.37521 2.33333 9.91667C2.33333 12.6 4.08333 14.6417 5.83333 16.3333L14 24.5L22.1667 16.3333"
                        stroke="white"
                        strokeWidth="2.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 15.1665L12.8333 13.9998L15.1667 11.6665L11.6667 8.1665"
                        stroke="white"
                        strokeWidth="2.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="inline-flex h-[36px] items-end gap-[5px] rounded-lg border border-white/5 bg-white/5 px-3 py-1.5">
                      <div className="h-2.5 w-1.5 rounded-[2px] bg-[#2e0147] transition-all duration-300 group-hover:h-5" />
                      <div className="h-4 w-1.5 rounded-[2px] bg-[#3a1b54] transition-all duration-300 delay-75 group-hover:h-2.5" />
                      <div className="h-1.5 w-1.5 rounded-[2px] bg-[#4a226c] transition-all duration-300 delay-100 group-hover:h-4" />
                      <div className="h-5 w-1.5 rounded-[2px] bg-[#5b2a82] transition-all duration-300 delay-150 group-hover:h-6" />
                      <div className="h-8 w-1.5 rounded-[2px] bg-[#f87171] transition-all duration-300 delay-200 group-hover:h-3" />
                    </div>
                    <p className="text-[10px] font-semibold text-[#f97316] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Fulfillment Gap Detected
                    </p>
                  </div>
                </div>
              </div>

              {/* Text below inner box */}
              <div className="mt-5 space-y-2 px-4 pb-4 text-center">
                <p className="text-xl font-semibold text-white">&lt; 50%</p>
                <p className="text-sm leading-relaxed text-text-secondary">
                  Nearly two-thirds say their sex life shapes their happiness — yet less than half feel fulfilled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section10;


