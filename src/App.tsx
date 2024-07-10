// import { Input } from "@headlessui/react";
import ProductCard from "./components/ProductCard";
import { productList, fromInputList } from "./data/index";
import Button from "./UI/Button";
import Modal from "./UI/Modal";
import Input from "./UI/Input";
import { useState } from "react";




const App = () => {
 /* __________ STATE __________*/
 const [isOpen, setIsOpen] = useState(false)

 function open() {
   setIsOpen(true)
 }

 function close() {
   setIsOpen(false)
 }
 
  /* __________ RENDER _____________ */
  const renderProductList = productList.map(product => <ProductCard key={product.id} product={product} />)
  const renderFormInputList = fromInputList.map(input => 
  <div className="flex flex-col space-y-2 mb-4">
    <label htmlFor={input.id} className="text-xs">{input.lable}</label>
    <Input type={input.type} name={input.name} id={input.id} />
  </div>)

  return (  
    <div className="container mr-7 ml-7 md:mr-12 md:ml-12 lg:mr-20 lg:ml-20 xl:mr-24 xl:ml-24 mt-10 mb-10">
      <div className="text-center">
        <Button className="bg-indigo-700 hover:bg-indigo-600 w-1/2 mb-6" onClick={open}>
          ADD
        </Button>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} close={close} title="Add a New Project">
        {renderFormInputList}
        <div className="flex items-center space-x-2 mt-4">
          <Button className="bg-indigo-700 hover:bg-indigo-600">Submit</Button>
          <Button className="bg-red-700 hover:bg-red-600" onClick={close}>Cancel</Button>
        </div>
      </Modal>
    </div>
  )
}
export default App;