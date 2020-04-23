import React, { useContext } from "react";
import { ProductContext } from "./ProductProvider";
import Product from "./Product";

export default () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products">
      {products.map((prod) => (
        <Product key={prod.id} product={prod} />
      ))}
    </div>
  );
};
