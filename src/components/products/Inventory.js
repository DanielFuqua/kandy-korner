import React, { useContext } from "react";
import { ProductContext } from "./ProductProvider";
import Product from "./Product";
import { ProductTypeContext } from "./ProductTypeProvider";

export default () => {
  const { products } = useContext(ProductContext);
  const { productTypes } = useContext(ProductTypeContext);

  return (
    <div className="products">
      {products.map((prod) => {
        const productType = productTypes.find(
          (type) => type.id === prod.productTypeId
        );
        return (
          <Product key={prod.id} product={prod} productType={productType} />
        );
      })}
    </div>
  );
};
