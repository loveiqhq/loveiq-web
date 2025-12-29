import type { CSSProperties, FC } from "react";

const steps = [
  {
    step: "Step One",
    title: "Take the Assessment",
    description: "We’ll guide you through eight key dimensions that shape your sexual life.",
    badge: "~10 Minutes",
    variant: "sliders",
  },
  {
    step: "Step Two",
    title: "Get a Unique Report",
    description: "Fully personalized report helping you uncover your sexuality in a new way.",
    badge: "Science grade",
    variant: "brain",
  },
  {
    step: "Step Three",
    title: "Grow with Guidance",
    description: "Discover insights that spark real behavioral change for deeper fulfillment.",
    badge: "Life Changing",
    variant: "chat",
  },
];

const edgeIcons = [
  { position: "left-[-26px] top-[28%]", stroke: "#a78bfa", fill: "none", d: "M5 12h14m-7-7 7 7-7 7" },
  { position: "left-[-30px] bottom-[22%]", stroke: "#fe6839", fill: "none", d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" },
  { position: "right-[-26px] top-[28%]", stroke: "#fe6839", fill: "none", d: "M4 12h16M12 4v16" },
  { position: "right-[-30px] bottom-[22%]", stroke: "#ffffff", fill: "none", d: "M12 4a8 8 0 0 0-8 8 8 8 0 0 0 12.52 6.88L20 20l-1.12-3.48A8 8 0 0 0 12 4z" },
];

const HowItWorksSection: FC = () => {
  return (
    <section className="section-shell relative overflow-hidden bg-[#0A0510] px-4 text-text-primary" aria-labelledby="how-it-works-heading">
      <div className="pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-24 bg-gradient-to-b from-[#0b0613] via-[#0b0613]/60 to-[#0A0510]" />

      <div className="content-shell relative flex flex-col gap-12">
        <h2 id="how-it-works-heading" className="text-center font-serif text-[44px] leading-tight text-white sm:text-[52px]">
          How It Works
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((item, idx) => (
            <div
              key={item.title}
              className="col-anim relative flex h-full min-h-[480px] flex-col gap-6 overflow-hidden rounded-[28px] border border-[rgba(255,255,255,0.05)] bg-[#1e102e] px-8 py-7 shadow-[0_26px_80px_rgba(0,0,0,0.55)]"
              style={{ animationDelay: `${0.08 * idx}s` } as CSSProperties}
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(242,109,79,0.08),transparent_42%),radial-gradient(circle_at_82%_28%,rgba(124,88,255,0.08),transparent_40%)]" />
              </div>

              <div className="relative space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">{item.step}</p>
                <h3 className="font-serif text-[22px] text-white sm:text-[24px]">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-white/70">{item.description}</p>
              </div>

              <div className="relative mt-auto overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-5">
                {item.variant === "sliders" && (
                  <div className="relative overflow-hidden rounded-[18px] border border-[rgba(255,255,255,0.05)] bg-[#22142f] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.32)]">
                    <div className="relative flex flex-col gap-3 text-white/70">
                      <div className="flex items-center gap-3 rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[#2a1838]/80 px-4 py-2 shadow-[0_6px_18px_rgba(0,0,0,0.28)]">
                        <span className="h-3 w-3 rounded-full bg-[#ff6a3a]" />
                        <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-[rgba(255,255,255,0.08)]">
                          <div className="absolute left-0 top-0 h-full w-[80px] rounded-full bg-[rgba(255,255,255,0.1)]" />
                        </div>
                      </div>
                      <div className="flex items-center gap-3 rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[#2a1838]/80 px-4 py-2 shadow-[0_6px_18px_rgba(0,0,0,0.28)]">
                        <span className="h-3 w-3 rounded-full bg-[#541475]" />
                        <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-[rgba(255,255,255,0.08)]">
                          <div className="absolute left-0 top-0 h-full w-[64px] rounded-full bg-[rgba(255,255,255,0.1)]" />
                          <span
                            className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border border-[rgba(255,255,255,0.22)] bg-transparent"
                            style={{ left: "72%" }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-3 rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[#2a1838]/80 px-4 py-2 shadow-[0_6px_18px_rgba(0,0,0,0.28)]">
                        <span className="h-3 w-3 rounded-full bg-white" />
                        <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-[rgba(255,255,255,0.08)]">
                          <div className="absolute left-0 top-0 h-full w-[48px] rounded-full bg-[rgba(255,255,255,0.1)]" />
                          <span
                            className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white"
                            style={{ left: "48px", boxShadow: "0 0 0 6px rgba(255,255,255,0.14)" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {item.variant === "brain" && (
                  <div className="relative flex items-center justify-center overflow-hidden rounded-[18px] border border-[rgba(255,255,255,0.05)] bg-[#241731] p-10 shadow-[0_18px_42px_rgba(0,0,0,0.32)]">
                    <div className="absolute h-[140px] w-[140px] rounded-full border border-[rgba(254,104,57,0.24)] border-dashed" />
                    <div className="absolute h-[180px] w-[180px] rounded-full border border-[rgba(84,20,117,0.22)] border-dashed" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2a1838] shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16 6.66669C16.0043 5.21495 15.2216 3.87485 13.9551 3.16527C12.6886 2.45569 11.1371 2.48803 9.9012 3.24977C8.66535 4.01151 7.93924 5.38306 8.004 6.83336C6.41598 7.24168 5.10403 8.35777 4.44646 9.85983C3.78889 11.3619 3.85879 13.0829 4.636 14.5267C3.2667 15.6391 2.53612 17.3567 2.68449 19.1147C2.83285 20.8726 3.84097 22.4435 5.37734 23.3107C5.12269 25.2809 5.9842 27.2294 7.61293 28.3669C9.24165 29.5044 11.3676 29.6423 13.1297 28.7249C14.8918 27.8074 15.9979 25.9866 16 24V6.66669"
                          stroke="#FE6839"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 6.66669C15.9957 5.21495 16.7784 3.87485 18.0449 3.16527C19.3114 2.45569 20.863 2.48803 22.0988 3.24977C23.3347 4.01151 24.0608 5.38306 23.996 6.83336C25.584 7.24168 26.896 8.35777 27.5535 9.85983C28.2111 11.3619 28.1412 13.0829 27.364 14.5267C28.7333 15.6391 29.4639 17.3567 29.3155 19.1147C29.1672 20.8726 28.159 22.4435 26.6227 23.3107C26.8773 25.2809 26.0158 27.2294 24.3871 28.3669C22.7584 29.5044 20.6324 29.6423 18.8703 28.7249C17.1082 27.8074 16.0021 25.9866 16 24V6.66669"
                          stroke="#FE6839"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path d="M20 17.3333C17.7108 16.528 16.1321 14.4231 16 12" stroke="#FE6839" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M23.4653 8.66671C23.788 8.10749 23.9706 7.47846 23.9973 6.83337" stroke="#FE6839" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                )}
                {item.variant === "chat" && (
                  <div className="relative flex h-[170px] items-center justify-center overflow-hidden rounded-[18px] border border-[rgba(255,255,255,0.05)] bg-[#241731] p-4 shadow-[0_18px_42px_rgba(0,0,0,0.32)]">
                    <div className="absolute inset-0 opacity-35" style={{ backgroundImage: "linear-gradient(36deg, rgba(254,104,57,0.05) 25%, transparent 25%, transparent 50%, rgba(254,104,57,0.05) 50%, rgba(254,104,57,0.05) 75%, transparent 75%, transparent)" }} />
                    <div className="relative w-full max-w-[220px]">
                      <div className="absolute left-1/2 top-1/2 flex w-[180px] -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-[14px] bg-[#2e0147] px-5 py-3 text-[12px] font-semibold text-white shadow-[0_10px_22px_rgba(0,0,0,0.3)]">
                        <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#ff6a3a]" fill="currentColor">
                          <path d="M12 21s-6-4.35-6-10a6 6 0 0 1 12 0c0 5.65-6 10-6 10Z" />
                        </svg>
                        Understand Desire
                      </div>
                      <div className="absolute left-1/2 top-[12px] flex -translate-x-1/2 -rotate-6 items-center rounded-[10px] border border-[rgba(255,255,255,0.12)] bg-[#2a1838]/80 px-4 py-[7px] text-[11px] font-semibold text-[#ff6a3a] shadow-[0_8px_18px_rgba(0,0,0,0.24)]">
                        And Deepen Bonds!
                      </div>
                      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 rotate-6 items-center rounded-[10px] border border-[rgba(255,255,255,0.12)] bg-[#2a1838]/85 px-3 py-[7px] text-[11px] font-semibold text-[#a78bfa] shadow-[0_8px_18px_rgba(0,0,0,0.24)]">
                        Finally...
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative mt-3 flex items-center gap-3">
                <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(255,255,255,0.08)] bg-[#2a1838] px-4 py-2 text-[12px] font-semibold text-[#a78bfa] shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
                  <span className="inline-flex h-2 w-2 rounded-full bg-accent-orange shadow-[0_0_0_8px_rgba(242,109,79,0.12)]" aria-hidden />
                  <span className="tracking-wide">{item.badge}</span>
                </div>
                {idx < steps.length - 1 && (
                  <div className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.12)] bg-[#2a1838] text-white/70 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {edgeIcons.map((icon, idx) => (
        <div
          key={idx}
          className={`pointer-events-none absolute flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[#1e102d] shadow-[0_10px_30px_rgba(0,0,0,0.35)] ${icon.position}`}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill={icon.fill} stroke={icon.stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d={icon.d} />
          </svg>
        </div>
      ))}
    </section>
  );
};

export default HowItWorksSection;
