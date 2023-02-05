import React, { useEffect, useState } from "react";
import { GetUsersQuery } from "../interfaces/user";
import { getAllProducts, getProductCart } from "../services/product";
import { useRouter } from "next/dist/client/router";
import { ListProduct } from "../interfaces/product";
import Link from "next/link";
import PaginationClient from "./../components/Pagination/PaginationClient";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

const DEFAULT_PRODUCTS_LIMIT = 5;

const ProductContent = () => {
  const [limitValue, setLimitValue] = useState(DEFAULT_PRODUCTS_LIMIT);
  const [products, setProducts] = useState<ListProduct[]>();
  const [totalProduct, setTotalProduct] = useState(0);

  const token = Cookies.get("token");

  const router = useRouter();

  const fetchProducts = async (query?: GetUsersQuery): Promise<void> => {
    try {
      const { data } = await getAllProducts({
        ...query,
        limit: limitValue,
      });

      setProducts(data.product);
      setTotalProduct(data.total);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const fetchCart = async (id: string) => {
    const res = await getProductCart(id);
    if(res.data.count) {
      sessionStorage.setItem("count", res.data.count);
    }
  };

  const onChangePage = (page: number) => {
    router.push(
      {
        query: {
          page: page,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  useEffect(() => {
    router.push(
      {
        query: {
          limit: limitValue,
        },
      },
      undefined,
      { shallow: true }
    );
  }, [limitValue]);

  useEffect(() => {
    const query = handleQueryParams(router.query);
    fetchProducts(query);
    if (token) {
      const decoded: any = jwt_decode(token);
      fetchCart(decoded.id);
    }
  }, [router.query]);

  const handleQueryParams = (query: any) => {
    const newQuery = query;

    if (!newQuery.page) {
      query.page = "1";
      router.push(
        {
          query: {
            ...newQuery,
          },
        },
        undefined,
        { shallow: true }
      );
    }
    return newQuery;
  };
  return (
    <>
      <div className="grid grid-cols-4 gap-6 mb-10">
        {products &&
          products.map((product, idx) => (
            <Link
              href={`/product/${product.id}`}
              className="bg-product rounded-lg cursor-pointer"
              key={idx}
            >
              <div className="p-2">
                <img
                  className="rounded-lg"
                  src={product.listImage[0]}
                  alt={product.name}
                />
              </div>
              <div className="py-6 px-2">
                <h1 className="text-base font-semibold">{product.name}</h1>
                <div className="flex items-center justify-between mt-5 px-3">
                  <div className="flex items-center">
                    {product.color.map((col, idx) => (
                      <div
                        className="h-3 w-3 rounded-full"
                        key={idx}
                        style={{ backgroundColor: col }}
                      />
                    ))}
                  </div>
                  <p className="text-base font-semibold">
                    {product.price.toLocaleString("vi")} đ
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <PaginationClient
        current={Number(router.query.page || 1)}
        pageSize={limitValue}
        total={totalProduct}
        onChange={onChangePage}
      />
    </>
  );
};

export default ProductContent;
