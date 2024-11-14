import {Api} from '../../Api'

import {ProductProps} from '../interfaces/Product'


export const findAll = async ()=>{
    const response = await Api.get<ProductProps[]>('products')
    return response.data
}