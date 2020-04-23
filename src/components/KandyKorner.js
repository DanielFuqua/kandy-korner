import React from "react";
import { LocationProvider } from "./locations/LocationProvider";
import LocationList from "./locations/LocationList";
import { ProductProvider } from "./products/ProductProvider";
import Inventory from "./products/Inventory";
import { ProductTypeProvider } from "./products/ProductTypeProvider";

export default () => (
  <>
    <LocationProvider>
      <ProductProvider>
        <ProductTypeProvider>
          <LocationList />
          <Inventory />
        </ProductTypeProvider>
      </ProductProvider>
    </LocationProvider>
  </>
);
