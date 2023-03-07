import React, {createContext} from 'react'

import {imageData} from '../Data';

export const ImageContext = createContext()
const ImageContextProvider = ({children}) => {
  return (
    <ImageContext.Provider value={{imageData}}>
        {children}
    </ImageContext.Provider>
  )
}

export default ImageContextProvider