import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import { productList, fromInputList, Colors} from "./data/index";
import Button from "./UI/Button";
import Modal from "./UI/Modal";
import Input from "./UI/Input";
import Error from "./UI/Error";
import { IProduct } from "./Interfaces";
import { productValidation } from "./validation";
import FormColer from "./UI/FormColer";
import { v4 as uuid } from 'uuid';




const App = () => {
  
  const defaultProductObj: IProduct = {
    id: "",
    title: "",
    price: "",
    imgURL: "",
    description: "",
    color: [],
    category: {
      name: "",
      imgURL: "",
    },
  };
 
  const defaultErrors = {
    title: "",
    price: "",
    imgURL: "",
    description: "",
  };

  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [errors, setErrors] = useState(defaultErrors);
  const [isOpen, setIsOpen] = useState(false);
  const [tempColorsForm, setTempColorForm] = useState<string[]> ([]);


  
  const open = () => {
    setIsOpen(true);
  };

  
  const close = () => {
    setIsOpen(false);
  };

  const clearColor = () => {
    setTempColorForm([""])
  };

  const clearErrors = () => {
    setErrors(defaultErrors)
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };


  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { title, description, price, imgURL } = product;
    const validationErrors = productValidation({
      title,
      description,
      price,
      imgURL,
    });

    const hasErrors = Object.values(validationErrors).some((value) => value !== "");

    if (hasErrors) {
      setErrors(validationErrors);
      return;
    }

    setProducts(prev => [{...product, id: uuid(), color: tempColorsForm }, ...prev ])

    
    setProduct(defaultProductObj);
    clearColor();
    close(); 
    
  };

  const onClear = () => {
    setProduct(defaultProductObj);
    clearErrors();
    clearColor();
  };



  
  const renderProductList = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  
  const renderFormInputList = fromInputList.map((input) => (
    <div className="flex flex-col space-y-2 mb-4" key={input.id}>
      <label htmlFor={input.id} className="text-xs">
        {input.lable}
      </label>
      <Input
        type={input.type}
        name={input.name}
        id={input.id}
        value={product[input.name as keyof IProduct] as string}
        onChange={onChangeHandler}
      />
      {errors[input.name as keyof typeof defaultErrors] && (
        <Error msg={errors[input.name as keyof typeof defaultErrors]} />
      )}
    </div>
  ));

  const renderFormColor = Colors.map(color => (<FormColer color={color} key={color} 
    onClick={() => {
      if (tempColorsForm.includes(color)){
        setTempColorForm(prev => prev.filter(item => item !== color))
        return;
      }
      setTempColorForm(prev => [... prev, color])
    }}
    />
  ))

  return (
    <div className="container mr-7 ml-7 md:mr-12 md:ml-12 lg:mr-20 lg:ml-20 xl:mr-24 xl:ml-24 mt-10 mb-10">
      <div className="flex justify-center">
        <Button onClick={open} className=" bg-indigo-700 hover:bg-indigo-600 mb-4">
          ADD
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} close={close} title="Add a New Product">
        <form onSubmit={submitHandler}>
          {renderFormInputList}
          <div className="flex flex-wrap space-x-1 space-y-1"> 
            {tempColorsForm.map(color => <span key={color} className="rounded-md text-white text-xs p-1" 
              style={{backgroundColor: color}}>{color}</span>)}
          </div> 
          <div className="flex items-center space-x-2"> {renderFormColor}</div> 
          <div className="flex items-center space-x-2 mt-4">
            <Button type="submit" className="bg-indigo-700 hover:bg-indigo-600">Submit</Button>
            <Button className="bg-red-700 hover:bg-red-600" onClick={close}>Cancel</Button>
            <Button className="bg-gray-600 hover:bg-gray-500" onClick={onClear}>Clear</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default App;
