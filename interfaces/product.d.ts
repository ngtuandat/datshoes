export interface SortOption {
    name: string;
    value: string;
}

export interface ProductProps {
    id?: string
    category: string
    name: string
    desc: string
    gender: string
    image: string[]
    color: string[]
    price: number
    size: number[]
}

export interface ListProduct {
    category: string
    color: string[]
    description: string
    id: string
    listImage: string[]
    name: string
    price: number
    size: number[]
    createdAt?: string;
    gender: string
}

export interface ProductValidator {
    name: string
    desc: string
    img: string
    size: string
    price: string
}