"use client";
import { useEffect, useState } from "react";

import React from "react";
import ProductList from "./ProductList";
import ProductApis from "../_utils/ProductApis";

function ProductSection() {
  const [productList, setProductList] = useState([]);
  const getRelevantDate = (product) => {
    const attrs = product?.attributes || {};
    return (
      attrs.publishedAt ||
      product?.publishedAt ||
      attrs.createdAt ||
      product?.createdAt
    );
  };

  const isWithinLastDays = (isoString, days) => {
    if (!isoString) return false;
    const target = new Date(isoString).getTime();
    if (Number.isNaN(target)) return false;
    const threshold = Date.now() - days * 24 * 60 * 60 * 1000;
    return target >= threshold;
  };

  const getLastestProducts_ = () => {
    ProductApis.getLastestProducts().then((response) => {
      const items = response?.data?.data || [];
      const filtered = items
        .filter((p) => isWithinLastDays(getRelevantDate(p), 4))
        .sort((a, b) => {
          const da = new Date(getRelevantDate(a)).getTime();
          const db = new Date(getRelevantDate(b)).getTime();
          return db - da;
        });
      setProductList(filtered);
    });
  };
  useEffect(() => {
    getLastestProducts_();
  }, []);
  return (
    <>
      <ProductList productList={productList} />
    </>
  );
}

export default ProductSection;
