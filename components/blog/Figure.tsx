"use client";

import Image from "next/image";

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}

export default function Figure({ src, alt, caption, priority }: FigureProps) {
  return (
    <figure className="prose-figure">
      <div className="prose-figure-frame">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 720px, 100vw"
          className="object-cover"
        />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
