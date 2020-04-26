import React from "react";

export default ({ product }) => {
  return (
    <section className="productPurchased">
      <div>
        <h3 className="product__name">{product.name}</h3>
        <div className="product__price">Price: ${product.price}</div>
      </div>
    </section>
  );
};
