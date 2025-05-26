"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

const heroImages = [
  "/images/hero/1.jpeg",
  "/images/hero/2.jpeg",
  "/images/hero/3.jpeg",
  "/images/hero/4.jpeg",
  "/images/hero/5.jpeg",
  "/images/hero/6.jpeg",
  "/images/hero/7.jpeg",
  "/images/hero/8.jpeg",
  "/images/hero/9.jpeg",
  "/images/hero/10.jpeg",

];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const autoplayInterval = useRef<NodeJS.Timeout | null>(null);

  // Start autoplay
  useEffect(() => {
    if (!emblaApi) return;

    autoplayInterval.current = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 5000);

    return () => {
      if (autoplayInterval.current) clearInterval(autoplayInterval.current);
    };
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {heroImages.map((src, index) => (
          <div className="relative min-w-full h-[90vh]" key={index}>
            <Image
              src={src}
              alt={`Hero ${index + 1}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
