import axios from 'axios'
import { ProductType } from 'types/home';

export const getAllProduct = async (): Promise<ProductType[]> => {
    const res = await axios.get("/api/products/");
    return res.data;
}