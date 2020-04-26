import React from "react";
import { LocationProvider } from "./locations/LocationProvider";
import LocationList from "./locations/LocationList";
import { ProductProvider } from "./products/ProductProvider";
import Inventory from "./products/Inventory";
import { ProductTypeProvider } from "./products/ProductTypeProvider";
import { EmployeeProvider } from "./employees/EmployeeProvider";
import EmployeeList from "./employees/EmployeeList";
import "./KandyKorner.css";
import { KustomerKandyProvider } from "./purchases/KustomerKandyProvider";
import MyOrderButton from "./purchases/MyOrderButton";

export default () => (
  <>
    <EmployeeProvider>
      <LocationProvider>
        <ProductProvider>
          <ProductTypeProvider>
            <KustomerKandyProvider>
              <h1>The Kandy Korner</h1>
              <MyOrderButton />
              <LocationList />
              <Inventory />
              <EmployeeList />
            </KustomerKandyProvider>
          </ProductTypeProvider>
        </ProductProvider>
      </LocationProvider>
    </EmployeeProvider>
  </>
);
