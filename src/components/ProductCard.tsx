import Color from '../UI/Color';
import Button from '../UI/Button';
import { IProduct } from '../Interfaces';
import { txtSlicer } from '../Utilis/Function';

interface IProps {
    product: IProduct;
}

const ProductCard = ({product}: IProps) => {
    const {category, description, imgURL, price, title} = product
    return (    
        <div className="p-2 border border-gray-300 rounded-md rounded-mg space-y-3 space-x-3 ">   
            <img src={imgURL} alt='product img' className="rounded-lg"/>
            <h2 className="font-bold text-lg">{title}</h2>
            <p className=" text-xs font-medium opacity-50">{txtSlicer(description)}</p>
            <div className="flex items-center space-x-2">
                <Color className="bg-red-600"></Color>
                <Color className="bg-blue-600"></Color>
                <Color className="bg-purple-600"></Color>
                <Color className="bg-lime-600"></Color>
                <Color className="bg-black"></Color>

            </div>
            <div className="flex items-center justify-between">
                <span className="font-bold">{price}</span>
                <img src={category.imgURL} alt='product img' className="rounded-full w-14 h-14 object-contain"/>  
            </div>
            <div className=" flex gap-2">
                <Button className="bg-indigo-700 hover:bg-indigo-600">EDIT</Button>
                <Button className="bg-red-700 hover:bg-red-600">DISTROY</Button>
            </div>
        </div>
    )
}

export default ProductCard;