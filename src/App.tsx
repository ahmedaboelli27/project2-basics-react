import ProductCard from "./components/ProductCard";
import { productList } from "./data/productList";


const App = () => {
  const renderProductList = productList.map(product => <ProductCard key={product.id} product={product} />)
  return (  
    <div className="container mr-7 ml-7 md:mr-12 md:ml-12 lg:mr-20 lg:ml-20 xl:mr-24 xl:ml-24 mt-10 mb-10">
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
        {renderProductList}
      </div>
    </div>
  )
}
export default App;