import React from "react";
import { LocationProvider } from "./locations/LocationProvider";
import LocationList from "./locations/LocationList";
import { ProductProvider } from "./products/ProductProvider";
import Inventory from "./products/Inventory";
import { ProductTypeProvider } from "./products/ProductTypeProvider";
import { EmployeeProvider } from "./employees/EmployeeProvider";
import EmployeeList from "./employees/EmployeeList";
import "./KandyKorner.css";

export default () => (
  <>
    <EmployeeProvider>
      <LocationProvider>
        <ProductProvider>
          <ProductTypeProvider>
            <h1>The Kandy Korner</h1>
            <LocationList />
            <Inventory />
            <EmployeeList />
          </ProductTypeProvider>
        </ProductProvider>
      </LocationProvider>
    </EmployeeProvider>
  </>
);
