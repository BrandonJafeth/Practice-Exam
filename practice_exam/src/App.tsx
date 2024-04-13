import './App.css'
import Categories from './components/Categories'
import Products from './components/Products'
import ProductsProvider from './context/ProductsProvider'

function App() {

  return (
    <>
      <ProductsProvider>
        <div className='categories'>
          <Categories />
        </div>
        <Products />
      </ProductsProvider>
    </>
  )
}

export default App
