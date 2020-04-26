import React, { useContext } from "react";
import { ProductContext } from "../products/ProductProvider";
import { KustomerKandyContext } from "./KustomerKandyProvider";
import ProductPurchasedHTML from "./ProductPurchasedHTML";

export default (props) => {
  const { products } = useContext(ProductContext);
  const activeUser = parseInt(localStorage.getItem("kandy_kustomer"));
  const { kustomerKandys } = useContext(KustomerKandyContext);
  const relatedKKs = kustomerKandys.filter(
    (kk) => kk.kustomerId === activeUser
  );
  console.log(relatedKKs);

  return (
    <>
      <div className="myOrderList">
        {relatedKKs.map((rkk) => {
          const productPurchased = products.find(
            (prod) => prod.id === rkk.productId
          );
          return (
            <ProductPurchasedHTML key={rkk.id} product={productPurchased} />
          );
        })}
      </div>
      <button className="closeMyOrder" onClick={props.toggler}>
        Close
      </button>
    </>
  );
};
