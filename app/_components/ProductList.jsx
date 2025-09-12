import React from "react";

function ProductList({ productList }) {
  return (
    <div>
      {productList.map((product) => {
        return <div key={product.id}>{product?.title}</div>;
      })}
    </div>
  );
}

export default ProductList;
