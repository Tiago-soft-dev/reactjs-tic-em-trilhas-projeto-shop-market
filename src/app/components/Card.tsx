import { Product } from "../interfaces/Product"
import { Button } from "./Button"

export const Card = ({item}: Product)=>{
    return (
        
        
        <div className="flex h-96 w-64 flex-col justify-center rounded-2xl bg-white p-4  ">
            
            <div className="flex justify-center ">
                <img src={`http://localhost:5173/public/assets/produtos/${item.image}.jpg`} 
                     alt={item.name} 
                     className="h-40 rounded-t-lg object-cover"/>
            </div>
            <div className="p-4 flex flex-col gap-2">
                <div className="flex justify-center items-center mb-2">
                    <span className="text-center capitalize font-bold">{item.name}</span>
                </div>
                <div className="flex justify-center items-center">
                    <span>R$ {item.price}</span>
                </div>
                <Button>Adicionar no Carrinho</Button>
               
            </div>
        </div>
    )
} 