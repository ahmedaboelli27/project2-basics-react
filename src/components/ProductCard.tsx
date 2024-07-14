
import Button from "../UI/Button";
import FormColer from "../UI/FormColer";
import { IProduct } from "../Interfaces";
import { txtSlicer } from "../Utilis/Function";

interface IProps {
    product: IProduct;
    setProductToEdit: (product: IProduct) => void;
    setProductToEditIndex: (index: number) => void;
    index: number;
    openEditModal: () => void;
    openConfirmModal: () => void;
}

const ProductCard = ({
    product,
    setProductToEdit,
    setProductToEditIndex,
    index,
    openEditModal,
    openConfirmModal,
}: IProps) => {
  const { category, description, imgURL, price, color, title } = product;

  const renderFormColor = color.map((color) => (
    <FormColer color={color} key={color} />
  ));

  const onEdit = () => {
    setProductToEdit(product);
    setProductToEditIndex(index);
    openEditModal();
    
  };

  const onRemove = () => {
    setProductToEdit(product);
    openConfirmModal();
  };

  return (
    <div className="p-2 border border-gray-300 rounded-md rounded-mg space-y-3 space-x-3 ">
      <img src={imgURL} alt="product img" className="rounded-lg" />
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="text-xs font-medium opacity-50 overflow-x-hidden">
        {txtSlicer(description)}
      </p>
      <div className="flex items-center space-x-2 flex-wrap">{renderFormColor}</div>
      <div className="flex items-center justify-between">
        <span className="font-bold">${price}</span>
        <img
          src={category.imgURL}
          alt={category.name}
          className="rounded-full w-14 h-14 object-contain"
        />
      </div>
      <div className="flex gap-2">
        <Button
          className="bg-indigo-700 hover:bg-indigo-600"
          onClick={onEdit}
        >
          EDIT
        </Button>
        <Button
          className="bg-red-700 hover:bg-red-600"
          onClick={onRemove}
        >
          REMOVE
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
