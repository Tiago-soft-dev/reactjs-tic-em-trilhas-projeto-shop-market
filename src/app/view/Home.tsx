import { useEffect } from "react"
import {useQuery} from 'react-query'
import { Card } from "../components/Card"
import { findAll } from "../services/product.service"
import { ProductProps } from "../interfaces/Product"

export const Home = ()=>{

    // useEffect(()=>{
    //     findAll().then((res)=>console.log(res))
    // }, [])

    const {
        data: products,
        error,
        isLoading
    } = useQuery<ProductProps[], Error>("query-products", async()=>{
        return await findAll()
    })


    return(
        <div className="mt-32 h-4/5 w-full flex flex-col items-center justify-center gap-16">
            <div className="grid h-5/6 w-11/12 grid-cols-4 gap-4 overflow-x-auto">
                {products?.map((item: ProductProps)=>(
                    <Card key={item.id} item={item} />
                )) }
            </div>
        </div>
    )
}