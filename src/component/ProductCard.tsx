import Image from "./ui/Image";
import Button from "./ui/Button";
import {IProduct} from "../interfaces";
import {txtSlicer} from "../utils/txtSlicer";

interface IProps{
    product : IProduct
}
export default function ProductCard({product}:IProps){

    const {title, imageURL, description, price} = product

    return <div className="max-w-sm md:max-w-lg md:mx-0 border rounded-md p-1 flex flex-col">
        <Image imageUrl={imageURL} alt={title} className="rounded-md h-52 w-full lg:object-cover"/>
        <h2 className="font-bold">{product.title}</h2>
        <p>{txtSlicer(description, 50)}</p>
       <div className="flex space-x-0.5 my-1">
           <span className="w-5 h-5 bg-indigo-500 rounded-full cursor-pointer"/>
           <span className="w-5 h-5 bg-yellow-500 rounded-full cursor-pointer"/>
           <span className="w-5 h-5 bg-red-500 rounded-full cursor-pointer"/>
       </div>
       <div className="flex items-center justify-between">
            <span>{price}</span>
            <Image imageUrl={product.imageURL} alt={title}
                 className="w-10 h-10 rounded-full object-center"/>
       </div>
       <div className="flex items-center justify-between space-x-2 mt-2">
            <Button className="bg-indigo-400" onClick={()=> alert('Boom!')}>Edit</Button>
            <Button className="bg-red-600">Delete</Button>
       </div>
    </div>
}