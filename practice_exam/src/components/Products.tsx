// Products.tsx
import  { useContext, useEffect, useState } from 'react'
import Product from '../types/product'
import SingleProduct from '../components/SingleProduct'
import ProductsContext from '../context/ProductsContex';

const Products = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [productsResult, setProductsResult] = useState<Product | null>(null);
    const [filterProduct, setfFilterProduct] = useState('');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const {selectedCategory} = useContext(ProductsContext);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('https://dummyjson.com/product');
                const result = await response.json();
                setProductsResult(result);
            } catch (err) {
                console.log(err);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, [selectedCategory])

    useEffect(() => {
        if (productsResult) {
            let newFilteredProducts = productsResult.products;

            if (selectedCategory !== '') {
                newFilteredProducts = newFilteredProducts.filter(
                    (product) => product.category === selectedCategory
                );
            }

            if (filterProduct !== '') {
                newFilteredProducts = newFilteredProducts.filter((product) =>
                    product.title.includes(filterProduct)
                );
            }

            setFilteredProducts(newFilteredProducts);
        }
    }, [selectedCategory, filterProduct, productsResult]);

    if (isLoading)
        return <div>...Loading</div>
    
    if (isError)
        return <div>Error</div>

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const textValue = event.target.value;
        setfFilterProduct(textValue);
    };

    return (
        <div className='results-container'>        
        <input type="text" onChange={handleChange} style={{width:'85%', height:40, marginBottom: 10, fontSize:'x-large'}}/>
        <div className='results'>
        {filteredProducts.map(product => <SingleProduct key={product.id} product={product} />)}
        </div>
     </div>
     
    )
}

export default Products