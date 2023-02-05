import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import { IdProdCart, ProductBuy } from './../../../interfaces/product.d';

export default function Cart(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const product = req.body.product
        addProductToCart(res, product)
    }

    if (req.method === "GET") {
        const id = req.query.id
        getListProductCart(res, String(id))
    }

    if (req.method === "DELETE") {
        const productDl = req.body.productDelete
        deleteProd(res, productDl)
    }
}

async function addProductToCart(res: NextApiResponse, product: ProductBuy) {
    try {
        const productBuy = await prisma.cart.findFirst({
            where: {
                idProd: product.id,
                AND: {
                    userId: product.idUser
                }
            }
        })
        if (productBuy) {
            await prisma.cart.update({
                where: {
                    id: productBuy.id
                },
                data: {
                    quantityProd: productBuy.quantityProd + product.quantity
                },
            })
        } else {
            await prisma.cart.create({
                data: {
                    user: { connect: { id: String(product.idUser) } },
                    idProd: String(product.id),
                    colorProd: product.color,
                    imageProd: String(product.image),
                    nameProd: String(product.name),
                    priceProd: Number(product.price),
                    quantityProd: product.quantity,
                    sizeProd: Number(product.size)
                }
            })

        }
        res.status(200).json('Add Successful')
    } catch (error) {
        res.status(500).json(error)
    }
}

async function getListProductCart(res: NextApiResponse, id: string) {
    try {
        const result = await prisma.cart.findMany({
            where: {
                userId: id
            },
            orderBy: {
                createdAt: 'asc'
            }
        })
        const count = await prisma.cart.count({
            where: {
                userId: id
            }
        })
        res.status(200).json({ result, count })
    } catch (error) {
        res.status(500).json(error)
    }
}

async function deleteProd(res: NextApiResponse, product: IdProdCart) {
    try {
        const productDelete = await prisma.cart.findFirst({
            where: {
                idProd: product.idProd,
                userId: product.idUser
            }
        })
        if (productDelete) {
            await prisma.cart.delete({
                where: {
                    id: productDelete.id
                }
            })
            res.status(200).json('Delete Successful')
        }
        res.status(404).json('Not Found')
    } catch (error) {
        res.status(500).json(error)
    }
}
