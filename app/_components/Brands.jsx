import React from "react";

function Brands() {
  const brands = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"];

  return (
    <section className="bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-6 text-white sm:py-8">
          {brands.map((label) => (
            <span
              key={label}
              className="text-xl font-semibold tracking-wide sm:text-2xl lg:text-3xl"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
