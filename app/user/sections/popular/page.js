"use client";

import { useRef, useState } from "react";

export default function PopularServices() {
  const services = [
    "Intense Bathroom Cleaning (2 Bathrooms)",
    "Drilling & hang (wall decor)",
    "Tap repair",
    "Classic cleaning (2 Bathrooms)",
    "Geyser check-up",
    "Drilling & hang (wall decor)",
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

  // ARROW
  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="mt-[100px] px-[100px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-[40px]">
        <h2 className="text-[38px] font-semibold text-[#2f2f2f]">
          Popular Services
        </h2>

        <button className="text-[14px] text-blue-600 border border-blue-600 rounded-full px-[14px] py-[4px]">
          See all
        </button>
      </div>

      {/* Cards Slider */}
      <div className="relative">
        <div
          ref={sliderRef}
          className="
            flex
            gap-x-[24px]
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
          {services.map((title, index) => (
            <div
              key={index}
              className="w-[240px] flex-shrink-0 cursor-pointer"
            >
              {/* Image Card */}
              <div
                className="
                  w-full
                  h-[260px]
                  rounded-[20px]
                  overflow-hidden
                  bg-[#f5f5f5]
                  shadow-[0_6px_18px_rgba(0,0,0,0.08)]
                  transition-transform
                  duration-300
                  hover:scale-[1.02]
                "
              >
                <img
                  src="/images/same1.png"
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <h4 className="mt-[14px] font-medium text-[16px] leading-[22px] text-[#2f2f2f]">
                {title}
              </h4>

              <p className="text-[13px] text-gray-500 mt-[4px]">
                ★ 4.79 (4.1K)
              </p>

              <p className="text-[14px] text-gray-800 font-medium mt-[2px]">
                ₹898
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={slideRight}
          className="
            absolute
            -right-[40px]
            top-[110px]
            w-[44px]
            h-[44px]
            rounded-full
            bg-white
            shadow-[0_8px_20px_rgba(0,0,0,0.15)]
            flex
            items-center
            justify-center
            text-[20px]
          "
        >
          →
        </button>
      </div>
    </section>
  );
}
