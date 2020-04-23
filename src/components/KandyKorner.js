import React from "react";
import { LocationProvider } from "./locations/LocationProvider";
import LocationList from "./locations/LocationList";
import { ProductProvider } from "./products/ProductProvider";
import Inventory from "./products/Inventory";

export default () => (
  <>
    <LocationProvider>
      <ProductProvider>
        <LocationList />
        <Inventory />
      </ProductProvider>
    </LocationProvider>
  </>
);
