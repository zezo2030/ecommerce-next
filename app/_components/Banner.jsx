import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <section className="relative overflow-hidden bg-[#F2F0F1]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-10 sm:gap-10 sm:py-16 lg:grid-cols-2 lg:py-20">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block">FIND CLOTHES</span>
              <span className="block">THAT MATCHES</span>
              <span className="block">YOUR STYLE</span>
            </h1>

            <p className="mt-4 max-w-xl text-base text-gray-600 sm:mt-5 sm:text-lg">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>

            <div className="mt-6 sm:mt-8">
              <a
                href="#shop"
                className="inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-4 text-base font-semibold text-white shadow-md transition hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black/20 sm:w-auto sm:py-3 sm:text-sm"
              >
                Shop Now
              </a>
            </div>

            <dl className="mt-8 grid max-w-lg grid-cols-3 gap-4 sm:mt-10 sm:gap-6">
              <div>
                <dt className="text-2xl font-extrabold">200+</dt>
                <dd className="text-xs text-gray-500 mt-1">
                  International Brands
                </dd>
              </div>
              <div>
                <dt className="text-2xl font-extrabold">2,000+</dt>
                <dd className="text-xs text-gray-500 mt-1">
                  High-Quality Products
                </dd>
              </div>
              <div>
                <dt className="text-2xl font-extrabold">30,000+</dt>
                <dd className="text-xs text-gray-500 mt-1">Happy Customers</dd>
              </div>
            </dl>
          </div>

          <div className="relative -mx-4 mt-6 h-[380px] sm:mx-0 sm:mt-0 sm:h-[520px] lg:h-[80vh]">
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              {/* Hero image */}
              <Image
                src="/banner.png"
                alt="Models wearing stylish clothes"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>

            {/* Decorative stars */}
            <svg
              className="absolute left-2 top-4 h-8 w-8 text-black/80 sm:left-4 sm:top-6 sm:h-10 sm:w-10"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0c.9 4.8 7.2 11.1 12 12-4.8.9-11.1 7.2-12 12-.9-4.8-7.2-11.1-12-12C4.8 11.1 11.1 4.8 12 0Z" />
            </svg>
            <svg
              className="absolute right-1 top-10 h-12 w-12 text-black/60 sm:right-2 sm:top-12 sm:h-14 sm:w-14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0c.9 4.8 7.2 11.1 12 12-4.8.9-11.1 7.2-12 12-.9-4.8-7.2-11.1-12-12C4.8 11.1 11.1 4.8 12 0Z" />
            </svg>
            <svg
              className="absolute left-3 bottom-16 h-7 w-7 text-black/70 sm:left-6 sm:bottom-20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0c.9 4.8 7.2 11.1 12 12-4.8.9-11.1 7.2-12 12-.9-4.8-7.2-11.1-12-12C4.8 11.1 11.1 4.8 12 0Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
