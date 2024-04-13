import { useContext, useEffect, useState } from 'react';
import ProductsContext from '../context/ProductsContex';

const Categories = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [categoriesResult, setCategoriesResult] = useState<any>([]);
    const {setSelectedCategory} = useContext(ProductsContext);
    useEffect(() => {
        setIsLoading(true);
        fetch('https://dummyjson.com/products/categories')
          .then((response) => response.json())
          .then((result) => {
              console.log(result); // Aquí imprimimos el resultado para ver su estructura
              setCategoriesResult(result);
          })
          .catch((err) => {
            console.log(err);
            setIsError(true);
          })
          .finally(() => setIsLoading(false));
      }, [])

      if (isLoading)
        return <div>...Loading</div>
    
      if (isError)
        return <div>Error</div>
    

    const handleClick = (value: any) => {
        const categoryText = value.target.innerText;
       setSelectedCategory(categoryText);
        // Aquí puedes hacer lo que necesites con categoryText
    };

    return (
        <>
            {categoriesResult.map((category, index) => (
                <button key={index} type='button' className="category-item" onClick={handleClick}>
                    {category}
                </button>
            ))}
        </>
    )
}

export default Categories;