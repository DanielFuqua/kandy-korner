import React, { useContext } from "react";
import { KustomerKandyContext } from "../purchases/KustomerKandyProvider";

export default ({ product, productType }) => {
  const { addKustomerKandy } = useContext(KustomerKandyContext);

  return (
    <section className="product">
      <div>
        <h3 className="product__name">{product.name}</h3>
        <div className="product__type">Product Type: {productType.type}</div>
        <div className="product__price">Price: ${product.price}</div>
      </div>
      <div>
        <button
          className="product_purchase_button"
          onClick={() => {
            addKustomerKandy({
              productId: product.id,
              kustomerId: parseInt(localStorage.getItem("kandy_kustomer")),
            });
          }}
        >
          BUY
        </button>
      </div>
    </section>
  );
};
