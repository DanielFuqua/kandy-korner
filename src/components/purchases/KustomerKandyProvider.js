import React, { useState, useEffect } from "react";

/*
    The context is imported and used by individual components
    that need data
*/
export const KustomerKandyContext = React.createContext();

/*
 This component establishes what data can be used.
 */
export const KustomerKandyProvider = (props) => {
  const [kustomerKandys, setKustomerKandys] = useState([]);

  const getKustomerKandys = () => {
    return fetch("http://localhost:8088/kustomerKandys")
      .then((res) => res.json())
      .then(setKustomerKandys);
  };

  const addKustomerKandy = (kustomerKandy) => {
    return fetch("http://localhost:8088/kustomerKandys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(kustomerKandy),
    }).then(getKustomerKandys);
  };

  useEffect(() => {
    getKustomerKandys();
  }, []);

  useEffect(() => {
    console.log("****  KustomerKandy APPLICATION STATE CHANGED  ****");
  }, [kustomerKandys]);

  return (
    <KustomerKandyContext.Provider
      value={{
        kustomerKandys,
        addKustomerKandy,
      }}
    >
      {props.children}
    </KustomerKandyContext.Provider>
  );
};
