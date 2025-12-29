import type { FC } from "react";

const personas = [
  { title: "Singles", image: "/2239bb32f51b4c83bfb647cee859127eae298678.jpg" },
  { title: "Partners & Couples", image: "/People in Relationships.png" },
  { title: "Communication Builders", image: "/People in Relationships.png" },
  { title: "Long-term Growth", image: "/2239bb32f51b4c83bfb647cee859127eae298678.jpg" },
];

const Section09: FC = () => {
  return (
    <section className="section-shell relative bg-[#0A0510] px-4 text-text-primary" aria-labelledby="audience-heading">
      <div className="content-shell relative flex flex-col items-center gap-10">
        <div className="space-y-3 text-center">
          <h2 id="audience-heading" className="font-serif text-4xl leading-tight sm:text-5xl md:text-5xl">
            Who is this perfect for <span className="text-[#9c7dff]">?</span>
          </h2>
          <p className="text-sm text-text-secondary sm:text-base">
            Designed for everyone on the spectrum of relationship and self-discovery.
          </p>
        </div>

        <div className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-4">
          {personas.map((item, idx) => (
            <div
              key={`${item.title}-${idx}`}
              className="relative overflow-hidden rounded-[22px] border border-border bg-card p-0 shadow-soft backdrop-blur"
            >
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" aria-hidden />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-xl font-semibold text-white">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section09;
