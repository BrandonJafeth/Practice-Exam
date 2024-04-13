//CREAR ACÁ EL TYPE DE PRODUCTO QUE
//SIRVA PARA UTILIZAR el id, thumbnail, title y price

type Product = {
    products: Product[];
    id: string,
    title: string, 
    price: number
    thumbnail:string
}

export default Product;