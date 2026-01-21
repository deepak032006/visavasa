"use client";

export default function SpotlightSection() {
  const images = [
    "/images/slider.png",
    "/images/slider1.png",
    "/images/slider.png",
  ];

  return (
    <section className="mt-[80px] px-[113px]">
      <h2 className="text-[28px] font-semibold text-[#2f2f2f] mb-[24px]">
        In the spotlight
      </h2>

      <div className="relative">
        <div className="flex gap-[24px] overflow-hidden">
          {images.map((img, index) => (
            <div
              key={index}
              className="group min-w-[400px] h-[250px] rounded-[16px] overflow-hidden cursor-pointer"
            >
              <img
                src={img}
                alt={`Spotlight ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* LEFT ARROW */}
        <button className="absolute left-[-22px] top-1/2 -translate-y-1/2 w-[44px] h-[44px] rounded-full bg-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] flex items-center justify-center text-[20px]">
          ←
        </button>

        {/* RIGHT ARROW */}
        <button className="absolute right-[-22px] top-1/2 -translate-y-1/2 w-[44px] h-[44px] rounded-full bg-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] flex items-center justify-center text-[20px]">
          →
        </button>
      </div>
    </section>
  );
}
