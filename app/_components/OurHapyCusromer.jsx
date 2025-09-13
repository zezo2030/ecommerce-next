"use client";

import React, { useMemo, useRef } from "react";

function OurHapyCusromer() {
  const containerRef = useRef(null);

  const testimonials = useMemo(
    () => [
      {
        id: 1,
        name: "Sarah M.",
        text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      },
      {
        id: 2,
        name: "Alex K.",
        text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      },
      {
        id: 3,
        name: "James L.",
        text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      },
      {
        id: 4,
        name: "Monica R.",
        text: "Great experience from browsing to checkout. Shipping was fast and the fit was perfect. Will definitely shop again!",
      },
      {
        id: 5,
        name: "Devin S.",
        text: "Quality fabrics and modern cuts at fair prices. Customer support was quick to help with sizing questions.",
      },
    ],
    []
  );

  const scrollByAmount = (direction) => {
    const el = containerRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth || 320;
    const gap = parseInt(
      getComputedStyle(el).columnGap || getComputedStyle(el).gap || "24",
      10
    );
    const amount = (cardWidth + gap) * 1.05; // scroll by just over one card
    el.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  const StarRow = () => (
    <div className="flex text-yellow-400 text-[20px]">
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </div>
  );

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-[Satoshi] font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-tight tracking-tight">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="hidden md:flex items-center gap-3">
          <button
            aria-label="Previous testimonials"
            onClick={() => scrollByAmount("prev")}
            className="h-10 w-10 rounded-full border border-gray-300 hover:bg-gray-50 flex items-center justify-center"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            aria-label="Next testimonials"
            onClick={() => scrollByAmount("next")}
            className="h-10 w-10 rounded-full border border-gray-300 hover:bg-gray-50 flex items-center justify-center"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <div className="relative">
        {/* Mobile arrows overlay */}
        <div className="md:hidden absolute right-3 -top-14 flex items-center gap-2 z-10">
          <button
            aria-label="Previous testimonials"
            onClick={() => scrollByAmount("prev")}
            className="h-9 w-9 rounded-full border border-gray-300 bg-white/80 backdrop-blur hover:bg-white flex items-center justify-center"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            aria-label="Next testimonials"
            onClick={() => scrollByAmount("next")}
            className="h-9 w-9 rounded-full border border-gray-300 bg-white/80 backdrop-blur hover:bg-white flex items-center justify-center"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div
          ref={containerRef}
          className="grid auto-cols-[85%] sm:auto-cols-[60%] md:auto-cols-[45%] lg:auto-cols-[33%] grid-flow-col gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ scrollbarWidth: "none" }}
        >
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="snap-start bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <StarRow />
              <div className="mt-4 flex items-center gap-2">
                <h3 className="font-semibold text-gray-900">{t.name}</h3>
                <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-emerald-500 text-white">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
              </div>
              <p className="mt-3 text-gray-600 leading-7">{t.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurHapyCusromer;
