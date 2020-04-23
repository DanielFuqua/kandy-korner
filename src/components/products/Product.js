import React from "react";

export default ({ product, productType }) => (
  <section className="product">
    <h3 className="product__name">{product.name}</h3>
    <div className="product__type">Product Type: {productType.type}</div>
    <div className="product__price">Price: ${product.price}</div>
  </section>
);
