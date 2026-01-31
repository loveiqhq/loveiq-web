import type { FC } from "react";

const S03TrustedBy: FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#0A0510] px-4 py-10 text-text-primary" aria-labelledby="trusted-heading">
      <div className="content-shell relative flex flex-col items-center gap-8 text-center">
        <div id="trusted-heading" className="h-6" aria-hidden />
      </div>
    </section>
  );
};

export default S03TrustedBy;
