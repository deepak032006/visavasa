"use client";

import { useRef, useState } from "react";
import Link from "next/link";

export default function PetBreeds() {
 const breeds = [
  { title: "Labrador", image: "/images/pet1.png", link: "/user/services/contractor/pet-breeds" },
  { title: "Retrievers", image: "/images/pet3.png", link: "/user/services/contractor/pet-breeds" },
  { title: "German Shepherds", image: "/images/pet.png", link: "/user/services/contractor/pet-breeds" },
  { title: "Golden Retrievers", image: "/images/pet4.png", link: "/user/services/contractor/pet-breeds" },
  { title: "Pugs", image: "/images/pet1.png", link: "/user/services/contractor/pet-breeds" },
  { title: "German Shepherds", image: "/images/spolight.png", link: "/user/services/contractor/pet-breeds" },
];



  const sliderRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);

  // 🔥 arrow logic
  const [showArrow, setShowArrow] = useState(false);
  const hideTimeout = useRef(null);

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 260, behavior: "smooth" });
  };

  const handleScroll = () => {
    setShowArrow(true);
    clearTimeout(hideTimeout.current);

    hideTimeout.current = setTimeout(() => {
      setShowArrow(false);
    }, 1000);
  };

  return (
    <section className="mt-[100px] px-[100px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-[40px]">
        <h2 className="text-[38px] font-semibold text-[#2f2f2f]">
          Pet Breeds
        </h2>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setOpenModal(true);
          }}
          className="text-[14px] text-blue-600 border border-blue-600 rounded-full px-[14px] py-[4px]"
        >
          See all
        </button>

        {openModal && (
  <div
    className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
    onClick={() => setOpenModal(false)}
  >
    <div
      className="bg-white w-[700px] rounded-2xl p-8 relative"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setOpenModal(false)}
        className="absolute top-4 right-4 text-xl"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-6">
        Pet Breeds
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {breeds.map((breed, index) => (
          <Link
            key={index}
            href={breed.link}
            onClick={() => setOpenModal(false)}
            className="flex flex-col items-center text-center hover:scale-105 transition"
          >
            <img
              src={breed.image}
              alt={breed.title}
              className="w-20 h-20 object-contain mb-3"
            />
            <span className="text-sm font-medium">
              {breed.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  </div>
)}

      </div>

      {/* Slider */}
      <div className="relative">
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="
            flex
            gap-x-[24px]
            overflow-x-scroll
            scrollbar-hide
            cursor-grab
            active:cursor-grabbing
          "
        >
          {breeds.map((breed, index) => (
            <Link
              key={index}
              href={breed.link}   // 👈 yahin link lagta hai
              className="w-[220px] flex-shrink-0 cursor-pointer block"
            >
              <div className="w-full h-[240px] rounded-[20px] overflow-hidden bg-[#f5f5f5] shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src={breed.image}
                  alt={breed.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h4 className="mt-[14px] font-medium text-[16px] leading-[22px] text-[#2f2f2f]">
                {breed.title}
              </h4>

              <p className="text-[13px] text-gray-500 mt-[4px]">
                ★ 4.79 (4.1K)
              </p>

              <p className="text-[14px] text-gray-800 font-medium mt-[2px]">
                ₹25,000
              </p>
            </Link>
          ))}

        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={slideRight}
          className={`
            absolute top-1/2 -translate-y-1/2 right-[-20px] z-20
            w-10 h-10 rounded-full bg-white shadow-lg
            flex items-center justify-center
            transition-all duration-300
            ${showArrow
              ? "opacity-100 scale-100"
              : "opacity-0 scale-75 pointer-events-none"
            }
          `}
        >
          ➜
        </button>
      </div>
    </section>
  );
}
