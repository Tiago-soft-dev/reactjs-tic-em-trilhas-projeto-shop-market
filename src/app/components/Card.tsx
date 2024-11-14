import { Button } from "./Button"

export const Card = ()=>{
    return (
        <div className="bg-white p-4 w-60 rounded-2xl">
            <div>
                <img src="http://localhost:5173/public/assets/produtos/tenis.jpg" alt="" />
            </div>
            <div className="p-4">
                <div className="flex justify-center items-center mb-2">
                    <h3>Nome Produto</h3>
                </div>
                <div className="flex justify-center items-center">
                    <span>Valor Produto</span>
                </div>
                <Button>Adicionar no Carrinho</Button>
               
            </div>
        </div>
    )
} 