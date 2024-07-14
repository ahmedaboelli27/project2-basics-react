import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import { productList, fromInputList, Colors, Ctegories } from "./data/index";
import { TProductName } from "./Types";
import Button from "./UI/Button";
import Modal from "./UI/Modal";
import Input from "./UI/Input";
import Error from "./UI/Error";
import Select from "./UI/Select";
import "./index.css"
import { IProduct, ICategory } from "./Interfaces";
import { productValidation } from "./validation";
import FormColer from "./UI/FormColer";
import { v4 as uuid } from "uuid";
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const defaultProductObj: IProduct = {
    id: "",
    title: "",
    price: "",
    imgURL: "",
    description: "",
    color: [],
    category: {
      id: "",
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
  const [selectedCategory, setSelectedCategory] = useState<ICategory>(Ctegories[0]);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [productToEdit, setProductToEdit] = useState<IProduct>(defaultProductObj);
  const [productToEditIndex, setProductToEditIndex] = useState<number>(0);
  const [errors, setErrors] = useState(defaultErrors);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [tempColorsForm, setTempColorForm] = useState<string[]>([]);
  const [colorErrorMessage, setColorErrorMessage] = useState("");
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);

  const open = () => setIsOpen(true);
  const closeConfirmModal = () => setIsOpenConfirmModal(false);
  const openConfirmModal = () => setIsOpenConfirmModal(true);
  const close = () => { setIsOpen(false); clearErrors(); };
  const openEditModal = (index: number, product: IProduct) => {
    setProductToEdit(product);
    setProductToEditIndex(index);
    setTempColorForm(product.color);
    setSelectedCategory(product.category); 
    setIsOpenEditModal(true);
  };
  const closeEditModal = () => {
    setIsOpenEditModal(false);
    clearErrors();
  };

  const clearColor = () => {
    setTempColorForm([]);
  };

  const clearErrors = () => {
    setErrors(defaultErrors);
    setColorErrorMessage("");
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

  const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProductToEdit({
      ...productToEdit,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const removeProductHandler = () => {
    const filtered = products.filter(product => product.id !== productToEdit.id);
    setProducts(filtered);
    closeConfirmModal();
    toast('Product has been deleted', {
      style: { backgroundColor: "#00284d", color: "white" }
    });
  };

  /*______ Submit Add Project_______*/
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

    if (tempColorsForm.length === 0) {
      setColorErrorMessage("Try choosing one or more colors for the product");
      return;
    } else {
      setColorErrorMessage("");
    }

    setProducts((prev) => [
      { ...product, id: uuid(), color: tempColorsForm, category: selectedCategory },
      ...prev,
    ]);

    setProduct(defaultProductObj);
    clearColor();
    close();
    toast('The product has been added successfully', {
      style: { backgroundColor: "#00284d", color: "white" }
    });
  };

  /*______ Submit Edit Project_______*/
  const submitEditHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { title, description, price, imgURL } = productToEdit;
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

    if (tempColorsForm.length === 0) {
      setColorErrorMessage("Try choosing one or more colors for the product");
      return;
    } else {
      setColorErrorMessage("");
    }

    const updatedProduct = { ...productToEdit, color: tempColorsForm, category: selectedCategory };
    const updatedProducts = [...products];
    updatedProducts[productToEditIndex] = updatedProduct;
    setProducts(updatedProducts);

    setProductToEdit(defaultProductObj);
    clearColor();
    closeEditModal();
    toast('The product has been modified successfully', {
      style: { backgroundColor: "#00284d", color: "white" }
    });
  };

  /*________ Handler _______*/
  const handleColorClick = (color: string) => {
    if (tempColorsForm.includes(color)) {
      setTempColorForm((prev) => prev.filter((item) => item !== color));
    } else {
      setTempColorForm((prev) => [...prev, color]);
      setColorErrorMessage("");
    }
  };

  const renderProductList = products.map((product, index) => (
    <ProductCard
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      setProductToEditIndex={setProductToEditIndex}
      index={index}
      openEditModal={() => openEditModal(index, product)}
      openConfirmModal={openConfirmModal}
    />
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

  const renderProductEditWithErrorMsg = (id: string, lable: string, name: TProductName) => {
    return (
      <div className="flex flex-col space-y-2 mb-4" key={id}>
        <label className="text-xs" htmlFor={id}>
          {lable}
        </label>
        <Input
          type="text"
          id={id}
          name={name}
          value={productToEdit[name]}
          onChange={onChangeEditHandler}
        />
        {errors[name as keyof typeof defaultErrors] && (
          <Error msg={errors[name as keyof typeof defaultErrors]} />
        )}
      </div>
    );
  };

  const renderFormColor = Colors.map((color) => (
    <FormColer color={color} key={color} onClick={() => handleColorClick(color)} />
  ));

  return (
    <div className="container mr-7 ml-7 md:mr-12 md:ml-12 lg:mr-20 lg:ml-20 xl:mr-24 xl:ml-24 mt-10 mb-10">
      <div className="flex justify-center">
        <Button onClick={open} className="bg-indigo-700 hover:bg-indigo-600 mb-4">
          ADD
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
        {renderProductList}
      </div>

      {/* {ADD PRODUCT MODAL} */}

      <Modal isOpen={isOpen} close={close} title="Add a New Product">
        <form onSubmit={submitHandler}>
          {renderFormInputList}
          <div className="flex flex-wrap space-x-1 space-y-1">
            {tempColorsForm.map((color) => (
              <span
                key={color}
                className="rounded-md text-white text-xs p-1"
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              >
                {color}
              </span>
            ))}
            {colorErrorMessage && (
              <span className="text-xs text-red-600">{colorErrorMessage}</span>
            )}
          </div>
          <div className="flex items-center space-x-2">{renderFormColor}</div>
          <Select selected={selectedCategory} setSelected={setSelectedCategory} />
          <div className="flex items-center space-x-2 mt-4">
            <Button type="submit" className="bg-indigo-700 hover:bg-indigo-600">
              Submit
            </Button>
            <Button className="bg-red-700 hover:bg-red-600" onClick={close}>
              Cancel
            </Button>
            <Button className="bg-gray-600 hover:bg-gray-500" onClick={clearErrors}>
              Clear
            </Button>
          </div>
        </form>
      </Modal>

      {/* {EDIT PRODUCT MODEL} */}

      <Modal isOpen={isOpenEditModal} close={closeEditModal} title="Edit This Product">
        <form onSubmit={submitEditHandler}>
          {renderProductEditWithErrorMsg("title", "Product Title", "title")}
          {renderProductEditWithErrorMsg("description", "Product Description", "description")}
          {renderProductEditWithErrorMsg("imgURL", "Product Image URL", "imgURL")}
          {renderProductEditWithErrorMsg("price", "Product Price", "price")}
          <div className="flex flex-wrap space-x-1 space-y-1">
            {tempColorsForm.map((color) => (
              <span
                key={color}
                className="rounded-md text-white text-xs p-1"
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              >
                {color}
              </span>
            ))}
            {colorErrorMessage && (
              <span className="text-xs text-red-600">{colorErrorMessage}</span>
            )}
          </div>
          <div className="flex items-center space-x-2">{renderFormColor}</div>
          <Select selected={selectedCategory} setSelected={setSelectedCategory} />
          <div className="flex items-center space-x-2 mt-4">
            <Button type="submit" className="bg-indigo-700 hover:bg-indigo-600">
              Submit
            </Button>
            <Button className="bg-red-700 hover:bg-red-600" onClick={closeEditModal}>
              Cancel
            </Button>
          </div>
        </form>
      </Modal>

      {/* {Delet Product Confirm Modal} */}
      <Modal isOpen={isOpenConfirmModal} close={closeConfirmModal}
              title="Are you sure you want to remove this product from your store?"
      >
        <p className="text-xs text-gray-400 mb-2">
          "Deleting this product will remove it permanently.
            Any accotiated data, sales history and other related information will also be deleted.
            please make sure this is the intended action."
        </p>
        <div className="flex items-center space-x-2 mt-4">
            <Button type="submit" className="bg-indigo-700 hover:bg-indigo-600" onClick={removeProductHandler}>
              Yes, Remove
            </Button>
            <Button className="bg-red-700 hover:bg-red-600" onClick={closeConfirmModal}>
              Cancel
            </Button>
          </div>

      </Modal>
      <Toaster />
    </div>
  );
};

export default App;
