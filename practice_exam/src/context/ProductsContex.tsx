import React from 'react'


type ProductContextData = {
    selectedCategory: string;
    setSelectedCategory: (value: string) => void;
}



const ProductsContext = React.createContext<ProductContextData>({
   selectedCategory: '',
   setSelectedCategory:  () => {},
})


export default ProductsContext;