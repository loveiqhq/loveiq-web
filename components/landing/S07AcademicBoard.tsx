import Image from "next/image";
import type { CSSProperties, FC } from "react";

const experts: {
  name: string;
  subtitle: string;
  photo: string;
  imageStyle: CSSProperties;
  logos: { src: string; width: number; height: number }[];
}[] = [
  {
    name: "Dr. Bruno Steinkraus",
    subtitle: "Founder and CEO of Soilytix",
    photo: "/academic/bruno.jpg",
    imageStyle: { width: "279.38%", height: "137.37%", left: "-117.45%", top: "-37.31%" },
    logos: [
      { src: "/academic/logo1.png", width: 25, height: 25 },
      { src: "/academic/logo2.png", width: 63, height: 25 },
    ],
  },
  {
    name: "Dr. Dijana Galijašević",
    subtitle: "CEO & Co-Founder at Impact Hero",
    photo: "/academic/dijana.jpg",
    imageStyle: { width: "235.05%", height: "100%", left: "-32.07%", top: "-0.1%" },
    logos: [
      { src: "/academic/logo1.png", width: 25, height: 25 },
      { src: "/academic/logo2.png", width: 63, height: 25 },
    ],
  },
  {
    name: "Dr. Quentin Ferry",
    subtitle: "Research Scientist at MIT",
    photo: "/academic/quentin.png",
    imageStyle: { width: "135.23%", height: "100%", left: "-17.62%", top: "0" },
    logos: [
      { src: "/academic/logo1.png", width: 25, height: 25 },
      { src: "/academic/logo2.png", width: 63, height: 25 },
    ],
  },
];

const BadgeCheck = () => (
  <svg
    aria-hidden
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.86093 7.61521C2.71498 6.95774 2.73739 6.27406 2.92609 5.62755C3.1148 4.98105 3.46368 4.39266 3.9404 3.91694C4.41712 3.44121 5.00625 3.09356 5.65314 2.90621C6.30004 2.71886 6.98377 2.69788 7.64093 2.84521C8.00264 2.27952 8.50094 1.81397 9.08989 1.4915C9.67883 1.16903 10.3395 1 11.0109 1C11.6824 1 12.343 1.16903 12.932 1.4915C13.5209 1.81397 14.0192 2.27952 14.3809 2.84521C15.0391 2.69724 15.724 2.71812 16.3719 2.90593C17.0199 3.09373 17.6098 3.44236 18.0868 3.91937C18.5638 4.39638 18.9124 4.98629 19.1002 5.63422C19.288 6.28215 19.3089 6.96705 19.1609 7.62521C19.7266 7.98692 20.1922 8.48522 20.5146 9.07417C20.8371 9.66311 21.0061 10.3238 21.0061 10.9952C21.0061 11.6667 20.8371 12.3273 20.5146 12.9163C20.1922 13.5052 19.7266 14.0035 19.1609 14.3652C19.3083 15.0224 19.2873 15.7061 19.0999 16.353C18.9126 16.9999 18.5649 17.589 18.0892 18.0657C17.6135 18.5425 17.0251 18.8914 16.3786 19.0801C15.7321 19.2688 15.0484 19.2912 14.3909 19.1452C14.0297 19.7131 13.531 20.1806 12.9411 20.5045C12.3511 20.8284 11.689 20.9983 11.0159 20.9983C10.3429 20.9983 9.68076 20.8284 9.09081 20.5045C8.50086 20.1806 8.00217 19.7131 7.64093 19.1452C6.98377 19.2925 6.30004 19.2716 5.65314 19.0842C5.00625 18.8969 4.41712 18.5492 3.9404 18.0735C3.46368 17.5978 3.1148 17.0094 2.92609 16.3629C2.73739 15.7164 2.71498 15.0327 2.86093 14.3752C2.29089 14.0145 1.82135 13.5154 1.49598 12.9244C1.17062 12.3335 1 11.6698 1 10.9952C1 10.3206 1.17062 9.65696 1.49598 9.066C1.82135 8.47504 2.29089 7.97597 2.86093 7.61521Z"
      fill="white"
      fillOpacity="0.1"
      stroke="#FE6839"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8.01074 10.9952L10.0107 12.9952L14.0107 8.99521" fill="white" fillOpacity="0.3" />
    <path
      d="M8.01074 10.9952L10.0107 12.9952L14.0107 8.99521"
      stroke="#FE6839"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const S07AcademicBoard: FC = () => {
  return (
    <section
      className="section-shell relative overflow-hidden bg-[#0A0510] px-4 text-white"
      aria-labelledby="academic-board-heading"
    >
      <div className="content-shell flex flex-col items-center gap-10">
        <h2
          id="academic-board-heading"
          className="max-w-[889px] text-center font-serif text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl md:text-5xl lg:text-[64px] lg:leading-[1]"
        >
          Supported by academic multidisciplinary expertise
        </h2>

        <div className="flex w-full items-center justify-center">
          <div className="grid w-full max-w-[1080px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {experts.map((expert) => (
              <div
                key={expert.name}
                className="group relative mx-auto h-[460px] w-full max-w-[340px] overflow-hidden rounded-[24px] border border-white/10 shadow-[0_20px_35px_rgba(0,0,0,0.45)] transition-all duration-700 ease-out transform-gpu hover:-translate-y-3 hover:shadow-[0_28px_50px_rgba(0,0,0,0.6)]"
              >
                {/* Image layer */}
                <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                  <div className="absolute" style={expert.imageStyle}>
                    <Image
                      src={expert.photo}
                      alt=""
                      fill
                      quality={85}
                      sizes="(max-width: 640px) 280vw, 1000px"
                      className="max-w-none object-cover"
                    />
                  </div>
                  {/* Desaturation overlay */}
                  <div className="absolute inset-0 bg-[rgba(255,255,255,0.3)] mix-blend-saturation" />
                </div>

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0510] from-[1.31%] via-[rgba(10,5,16,0.2)] via-[36.572%] to-[rgba(10,5,16,0)] to-[71.834%]" />

                {/* Purple gradient overlay — hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#a78bfa] from-[1.31%] via-[rgba(167,139,250,0.2)] via-[36.572%] to-[rgba(167,139,250,0)] to-[71.834%] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Bottom info */}
                <div className="absolute inset-x-0 bottom-[-8px] flex h-[76px] flex-col justify-end overflow-hidden px-6 pb-4 transition-all duration-300 group-hover:h-[147px]">
                  {/* Name row */}
                  <div className="flex w-full items-center gap-2">
                    <span className="font-serif text-xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-[25px]">
                      {expert.name}
                    </span>
                    <BadgeCheck />
                  </div>
                  <div className="mt-2 max-h-0 translate-y-2 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-[120px] group-hover:translate-y-0 group-hover:opacity-100">
                    {/* Subtitle — revealed on hover */}
                    <div className="border-t border-white/10 pt-[9px]">
                      <span className="font-sans text-[13px] font-bold uppercase tracking-[1.1px] text-white">
                        {expert.subtitle}
                      </span>
                    </div>
                    {/* Logos — revealed on hover */}
                    <div className="mt-3 flex items-center gap-4">
                      {expert.logos.map((logo) => (
                        <Image
                          key={logo.src + logo.width}
                          src={logo.src}
                          alt=""
                          width={logo.width}
                          height={logo.height}
                          className="opacity-70"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <a
          href="/about"
          className="hidden inline-flex items-center justify-center rounded-full border border-[#fe6839] bg-transparent px-8 py-4 text-base font-bold text-[#fe6839] transition-colors duration-300 hover:bg-[#fe6839] hover:text-white"
        >
          Learn more about our experts
        </a>
      </div>
    </section>
  );
};

export default S07AcademicBoard;
