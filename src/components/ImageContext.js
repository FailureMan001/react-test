import React, { createContext } from "react";

import {
  imageData,
  aroundData,
  insideData,
  toiletData,
  viewData,
  homeData,
  salesData,
} from "../Data";

export const ImageContext = createContext();
const ImageContextProvider = ({ children }) => {
  return (
    <ImageContext.Provider
      value={{
        imageData,
        aroundData,
        insideData,
        toiletData,
        viewData,
        homeData,
        salesData,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContextProvider;
