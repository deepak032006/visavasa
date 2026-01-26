"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function SpotlightSection() {
  const router = useRouter();

  const images = [
    "/images/slider.png",
    "/images/slider1.png",
    "/images/slider.png",
    "/images/slider1.png",
  ];

  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // MOUSE EVENTS
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // ARROWS
  const slideLeft = () => {
    sliderRef.current.scrollBy({ left: -420, behavior: "smooth" });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 420, behavior: "smooth" });
  };

  // IMAGE CLICK
  const handleRedirect = () => {
    router.push("/user/spotlight"); // 🔁 change if needed
  };

  return (
    <section className="mt-[80px] px-[113px]">
      <h2 className="text-[28px] font-semibold text-[#2f2f2f] mb-[24px]">
        In the spotlight
      </h2>

      <div className="relative">
        <div
          ref={sliderRef}
          className="
            flex gap-[24px]
            overflow-x-scroll
            scrollbar-hide
            cursor-grab
            active:cursor-grabbing
          "
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          {images.map((img, index) => (
            <div
              key={index}
              onClick={handleRedirect}
              className="
                min-w-[400px]
                h-[250px]
                rounded-[16px]
                overflow-hidden
                group
                cursor-pointer
              "
            >
              <img
                src={img}
                alt={`Spotlight ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* LEFT */}
        <button
          onClick={slideLeft}
          className="absolute left-[-22px] top-1/2 -translate-y-1/2 w-[44px] h-[44px] rounded-full bg-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] flex items-center justify-center text-[20px]"
        >
          ←
        </button>

        {/* RIGHT */}
        <button
          onClick={slideRight}
          className="absolute right-[-22px] top-1/2 -translate-y-1/2 w-[44px] h-[44px] rounded-full bg-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] flex items-center justify-center text-[20px]"
        >
          →
        </button>
      </div>
    </section>
  );
}
