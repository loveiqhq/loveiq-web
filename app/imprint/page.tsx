import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint | LoveIQ",
  description: "LoveIQ Imprint - Legal information and company details.",
};

export default function ImprintPage() {
  return (
    <main
      className="min-h-screen px-4 py-20"
      style={{ backgroundColor: "#09050F" }}
    >
      <article className="mx-auto max-w-3xl">
        <h1
          className="font-serif font-light text-white mb-10"
          style={{ fontSize: "36px" }}
        >
          Imprint
        </h1>

        <div
          className="font-sans space-y-6 text-gray-300 leading-relaxed"
          style={{ fontSize: "18px" }}
        >
          <p>
            <span className="font-semibold text-white">
              Applied Psychometrics UG
            </span>{" "}
            (haftungsbeschränkt)
            <br />
            Hasenheide 62,
            <br />
            10967 Berlin
            <br />
            Germany
          </p>

          <p>Commercial Register: TBD</p>

          <p>VAT Identification Number pursuant to §27a UStG: TBD</p>

          <p>Managing Director: Marcus Börner</p>

          <p>
            Responsible for content pursuant to § 18 (2) of the German Interstate
            <br />
            Media Treaty (MStV): Marcus Börner, Hasenheide 62, 10967 Berlin
          </p>

          <p>
            Email:{" "}
            <a
              href="mailto:hello@loveiq.org"
              className="text-gray-300 hover:text-white transition-colors"
            >
              hello@loveiq.org
            </a>
          </p>
        </div>
      </article>
    </main>
  );
}
