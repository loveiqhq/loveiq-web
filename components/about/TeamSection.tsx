"use client";

import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

// Social icons
const LinkedInIcon: FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#6b7280">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon: FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#6b7280">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GlobeIcon: FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const DribbbleIcon: FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#6b7280">
    <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073a42.153 42.153 0 0 0-.767-1.68c2.316-1 4.108-2.276 5.363-3.822a9.857 9.857 0 0 1 2.507 5.575zm-3.842-6.91c-1.139 1.398-2.817 2.56-5.028 3.476a42.566 42.566 0 0 0-3.387-5.292 9.9 9.9 0 0 1 8.415 1.816zM7.73 3.615a40.51 40.51 0 0 1 3.407 5.227c-2.617.895-5.695 1.347-9.21 1.347-.082 0-.164-.001-.246-.001a9.902 9.902 0 0 1 6.049-6.573zM2.115 12.003c0-.032.001-.065.002-.097.082.001.165.002.248.002 4.012 0 7.509-.552 10.492-1.653.235.494.456.993.664 1.497-3.633 1.147-6.4 3.253-8.303 6.317a9.862 9.862 0 0 1-3.103-6.066zm4.456 7.379c1.745-2.834 4.27-4.78 7.584-5.842.814 2.115 1.415 4.35 1.802 6.708a9.855 9.855 0 0 1-9.386-.866zm10.931-.181a40.483 40.483 0 0 0-1.649-6.283c1.936-.283 4.058-.214 6.365.207a9.887 9.887 0 0 1-4.716 6.076z" />
  </svg>
);

const TeamSection: FC = () => {
  const team = [
    {
      name: "Ema Djedović",
      role: "Product Lead",
      image: "/about/team-ema-djedovic.png",
      socials: ["linkedin", "twitter", "globe"],
    },
    {
      name: "Eman Čičkušić",
      role: "Tech Lead",
      image: "/about/team-eman-cickusic-61a88a.png",
      socials: ["linkedin", "twitter", "dribbble"],
    },
    {
      name: "Ferhad Jukić",
      role: "Tech Lead",
      image: "/about/team-ferhad-jukic.png",
      socials: ["linkedin", "twitter"],
    },
    {
      name: "Ismar Fazlić",
      role: "Design Lead",
      image: "/about/team-ismar-fazlic-74951d.png",
      socials: ["dribbble", "twitter", "linkedin"],
    },
    {
      name: "Marcus Börner",
      role: "Strategy Lead",
      image: "/about/team-marcus-borner-56586a.png",
      socials: ["linkedin"],
    },
  ];

  const getSocialIcon = (social: string) => {
    switch (social) {
      case "linkedin":
        return <LinkedInIcon />;
      case "twitter":
        return <TwitterIcon />;
      case "globe":
        return <GlobeIcon />;
      case "dribbble":
        return <DribbbleIcon />;
      default:
        return null;
    }
  };

  return (
    <section id="team" className="relative overflow-hidden border-t border-white/5 bg-[#0A0510] px-6 pb-24 pt-24">
      {/* Background blurs */}
      <div className="pointer-events-none absolute left-[-600px] top-[294px] h-[695px] w-[695px] rounded-full bg-[#2e0147] opacity-100 blur-[110px] mix-blend-screen" />
      <div className="pointer-events-none absolute right-[-591px] top-[341px] h-[692px] w-[692px] rounded-full bg-[#2e0147] opacity-100 blur-[110px] mix-blend-screen" />

      <div className="content-shell relative z-10">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center gap-6">
          {/* Our Team badge - positioned to the right */}
          <div className="relative w-full">
            <div className="absolute right-[10%] top-0 rotate-12 rounded-full bg-[#fe6839] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.5px] text-white shadow-[0_4px_10px_rgba(254,104,57,0.3)]">
              Our Team
            </div>
          </div>

          <h2 className="mt-8 font-serif text-[48px] font-medium leading-[1] tracking-[-1.2px] text-white">
            Leadership Team With Vision
          </h2>
          <p className="max-w-[672px] text-center text-xl leading-[1.46] text-[#9CA3AF]">
            We&apos;ve combined years of clinical experience, cutting-edge psychology, and intuitive design to create a platform that gives you complete visibility into your emotional well-being.
          </p>
        </div>

        {/* Team cards */}
        <div className="mx-auto flex max-w-[920px] flex-wrap justify-center gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex w-[290px] flex-col gap-5 rounded-[32px] border border-white/5 bg-[#120B1C] p-[17px]"
            >
              {/* Photo */}
              <div className="relative h-[256px] w-[256px] overflow-hidden rounded-2xl bg-[#0a0510]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1 px-2 pb-2">
                <h3 className="text-xl font-medium leading-[1.4] text-white">
                  {member.name}
                </h3>
                <p className="text-sm font-normal leading-[1.43] text-[#6B7280]">
                  {member.role}
                </p>

                {/* Social links */}
                <div className="flex gap-4 pt-4">
                  {member.socials.map((social) => (
                    <Link
                      key={social}
                      href="#"
                      className="transition-opacity hover:opacity-70"
                    >
                      {getSocialIcon(social)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
