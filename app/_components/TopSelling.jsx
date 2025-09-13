"use client";

import React, { useEffect, useState } from "react";
import { getTopSellingProducts } from "../_utils/ProductApis";
import generateStars from "../_utils/generateStars";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

function TopSelling() {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    getTopSellingProducts().then((response) => {
      setProducts(response.data.data);
      console.log(response.data.data);
    });
  }, []);

  // Show only first 3 products initially, or all if showAll is true
  const displayedProducts = showAll ? products : products.slice(0, 3);
  return (
    <section>
      <div className="mx-auto max-w-7xl mt-[72px] px-4">
        <div className="text-center mb-16">
          <h2 className="mt-14 font-[Satoshi] font-[700] text-[48px]">
            Top Selling
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {displayedProducts.map((product) => (
            <div
              className="group bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200 overflow-hidden"
              key={product.id}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-50">
                <Image
                  src={product.banner.url}
                  alt={product.title}
                  className="w-full h-72 object-cover group-hover:opacity-90 transition-opacity duration-200"
                  width={400}
                  height={300}
                />

                {/* New arrival badge */}
                <div className="absolute top-3 left-3 bg-black text-white px-2 py-1 rounded text-xs font-medium">
                  NEW
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {product.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {generateStars(product.rating || 4.2)}
                  <span className="text-sm text-gray-500 ml-1">
                    ({product.rating || 4.2})
                  </span>
                </div>

                {/* Price and Add to cart */}
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-gray-900 font-[Satoshi]">
                    ${product.price}
                  </p>

                  <button className="bg-black text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Show Less Button */}
        {products.length > 3 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="border border-gray-300 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  Show More
                  <ChevronDown className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default TopSelling;
