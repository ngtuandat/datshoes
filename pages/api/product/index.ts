import { NextApiRequest, NextApiResponse } from 'next';
import { ProductProps } from '../../../interfaces/product';
import { GetUsersQuery } from '../../../interfaces/user';
import prisma from '../../../lib/prisma';

export default function Product(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const product = req.body.product
        createProduct(product, res)
    }

    if (req.method === "GET") {
        const query = req.query
        getProduct(res, query)
    }

    if (req.method === 'PUT') {
        const product = req.body.product
        updateProduct(res, product)
    }

    if (req.method === "DELETE") {
        const id = req.body.id
        deleteProduct(res, id)
    }
}

async function createProduct(product: ProductProps, res: NextApiResponse) {
    try {
        await prisma.product.create({
            data: {
                name: product.name,
                category: product.category,
                color: product.color,
                description: product.desc,
                price: product.price,
                listImage: product.image,
                size: product.size,
                gender: product.gender
            }
        })
        res.status(200).json('Create Successful')
    } catch (error) {
        res.status(500).json(error)
    }
}

async function getProduct(res: NextApiResponse, query: GetUsersQuery) {
    try {
        const getProd = await prisma.product.findMany({
            skip: (Number(query.page || 1) - 1) * 6,
            take: Number(query.limit),
        });

        const total = await prisma.product.count();

        res.status(200).json({ product: getProd, total });
    } catch (error) {
        res.status(500).json(error);
    }
}

async function updateProduct(res: NextApiResponse, product: ProductProps) {
    try {
        await prisma.product.update({
            where: {
                id: product.id
            },
            data: {
                name: product.name,
                category: product.category,
                color: product.color,
                description: product.desc,
                price: product.price,
                listImage: product.image,
                size: product.size,
                gender: product.gender
            }
        })
        res.status(200).json('Update Successful')
    } catch (error) {
        res.status(500).json(error)
    }
}

async function deleteProduct(res: NextApiResponse, id: string) {
    try {
        await prisma.product.delete({
            where: {
                id: id
            }
        })
        res.status(200).json('Update Successful')
    } catch (error) {
        res.status(500).json(error)
    }
}