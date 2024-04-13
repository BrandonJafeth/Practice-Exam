import React, { useState } from 'react';
import ProductsContext from './ProductsContex';

export interface IThemeProviderProps {
  children: React.ReactNode;
}  

 const ProductsProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(' ');

  return (
    <ProductsContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;