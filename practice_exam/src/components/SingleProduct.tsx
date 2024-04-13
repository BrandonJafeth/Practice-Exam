import Product from '../types/product'

const SingleProduct = ({ product }: { product: Product }) => {
    return (
        <div className='result-item'>
            <img width={'100%'} height={200} src={product.thumbnail} alt={product.title} />
            <strong>${product.price}</strong>
            <p className='product-title'>{product.title}</p>
        </div>
    )
}

export default SingleProduct