"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ConstructionContract() {
  const cards = [
    { title: "Electrician", image: "/images/electrician.png", link: "/user/services/contractor/electrician" },
    { title: "Gardner", image: "/images/gardner.png", link: "/user/services/contractor/gardner" },
    { title: "Carpenter", image: "/images/carpenter.png", link: "/user/services/contractor/carpenter" },
    { title: "Painter", image: "/images/painter.png", link: "/user/services/contractor/painter" },
    { title: "Construction", image: "/images/construction.png", link: "/user/services/contractor/construction" },
    { title: "Gardner", image: "/images/gardner.png", link: "/user/services/contractor/gardner" },
  ];

  const sliderRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
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
        <div>
          <h2 className="text-[38px] font-semibold text-[#2f2f2f]">
            Construction Contract
          </h2>
          <p className="text-[17px] text-gray-500 mt-[4px]">
            Pamper Home With Trusted Local Experience
          </p>
        </div>

        <button
          type="button"
          onClick={() => setOpenModal(true)}
          className="text-[14px] text-blue-600 border border-blue-600 rounded-full px-[14px] py-[4px]"
        >
          See all
        </button>

        {/* MODAL */}
        {openModal && (
          <div
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
            onClick={() => setOpenModal(false)}
          >
            <div
              className="bg-white w-[600px] rounded-2xl p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpenModal(false)}
                className="absolute top-4 right-4 text-xl"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold mb-6">
                Construction Contract
              </h2>

              <h3 className="font-semibold mb-3">Services</h3>

              <div className="grid grid-cols-4 gap-4">
                {cards.map((card, i) => (
                  <Link
                    key={i}
                    href={card.link}
                    className="flex flex-col items-center gap-2 group"
                    onClick={() => setOpenModal(false)}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={48}
                      height={48}
                      loading="lazy"
                      className="object-contain"
                    />
                    <span className="text-sm">{card.title}</span>
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
          className="flex gap-x-[24px] overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing"
        >
          {cards.map((card, index) => (
            <Link
              key={index}
              href={card.link}
              className="w-[220px] flex-shrink-0 cursor-pointer block"
            >
              <div className="relative w-full h-[240px] rounded-[20px] overflow-hidden bg-[#f5f5f5] shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>

              <h4 className="mt-[14px] font-medium text-[16px] text-[#2f2f2f]">
                {card.title}
              </h4>

              <p className="text-[13px] text-gray-500 mt-[4px]">
                ★ 4.79 (4.1K)
              </p>

              <p className="text-[14px] text-gray-800 font-medium mt-[2px]">
                ₹898
              </p>
            </Link>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={slideRight}
          className={`
            absolute top-1/2 -translate-y-1/2 right-[-20px] z-20
            w-10 h-10 rounded-full bg-white shadow-lg
            flex items-center justify-center
            transition-all duration-300
            ${
              showArrow
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
