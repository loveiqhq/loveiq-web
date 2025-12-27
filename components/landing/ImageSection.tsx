import Image from "next/image";
import type { FC } from "react";

type ImageSectionProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

const ImageSection: FC<ImageSectionProps> = ({ src, alt, className = "", priority = false }) => (
  <section className={`flex justify-center bg-[#050208] px-4 ${className}`}>
    <div className="w-full">
      <Image
        src={src}
        alt={alt}
        width={2880}
        height={2048}
        className="h-auto w-full"
        priority={priority}
      />
    </div>
  </section>
);

export default ImageSection;
