import axios from 'axios';
import { ProductProps } from '../../interfaces/product';
import { GetUsersQuery } from '../../interfaces/user';

export const CreateProduct = async (product: ProductProps) => {
    return await axios.post("/api/product", { product });
}

export const getAllProducts = async (query: GetUsersQuery) => {
    return await axios.get("/api/product", { params: query });
};

export const UpdateProduct = async (product: ProductProps) => {
    return await axios.put('/api/product', { product })
}

export const deleteProduct = async (id: string) => {
    return await axios.delete('/api/product', { data: { id } })
}