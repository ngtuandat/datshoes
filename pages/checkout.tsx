import React, { ReactElement, useEffect, useMemo, useState } from "react";
import MainClient from "../components/Layouts/MainClient";
import { CustomHeader } from "./../components/Header/CustomHeader";
import { GoPrimitiveDot } from "react-icons/go";
import Table from "../components/Table";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import {
  deleteProdCart,
  getProductCart,
  plusQuantityCart,
} from "../services/product";
import { listProductBuyProps } from "../interfaces/product";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiMinus, BiPlus } from "react-icons/bi";
import { miniusQuantityCart } from "./../services/product/index";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { BsCheck } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

const tabs = ["Giỏ hàng", "Địa chỉ và thông tin", "Thanh toán"];
const column = ["Sản phẩm", "Giá", "Số lượng", "Tổng tiền", ""];
const Checkout = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [listProductBuy, setListProductBuy] = useState([]);
  const [listTabOver, setListTabOver] = useState<string[]>([]);
  const [countCard, setCountCard] = useState<number>();

  const token = Cookies.get("token");

  const fetchCart = async (id: string) => {
    const res = await getProductCart(id);
    setListProductBuy(res.data.result);
    setCountCard(res.data.count);
  };

  const handleMinus = async (
    idProd: string,
    idUser: string,
    quantity: number
  ) => {
    const productUpdate = { idProd, idUser };
    if (quantity >= 1) {
      const res = await miniusQuantityCart(productUpdate);
      if (res.status === 200 && token) {
        const decoded: any = jwt_decode(token);
        fetchCart(decoded.id);
      }
    }
  };

  const handlePlus = async (idProd: string, idUser: string) => {
    const productUpdate = { idProd, idUser };
    const res = await plusQuantityCart(productUpdate);
    if (res.status === 200 && token) {
      const decoded: any = jwt_decode(token);
      fetchCart(decoded.id);
    }
  };

  const handleDeleteProdCart = async (idProd: string, idUser: string) => {
    const productDelete = { idProd, idUser };
    const res = await deleteProdCart(productDelete);
    if (res.status === 200 && token) {
      const decoded: any = jwt_decode(token);
      fetchCart(decoded.id);
    }
  };

  const handleNextTab = (tab: string) => {
    const index = tabs.indexOf(tab);
    setCurrentTab(tabs[index + 1]);
    setListTabOver([...listTabOver, tab]);
  };

  const dataSourceCart = useMemo(() => {
    return listProductBuy.map((item: listProductBuyProps, idx) => {
      return [
        <div className="flex items-center space-x-2">
          <img
            className="w-16 h-16 rounded-lg"
            src={item.imageProd}
            alt={item.nameProd}
          />
          <div className="flex flex-col space-y-3">
            <span className="text-sm font-semibold">{item.nameProd}</span>
            <div className="flex items-center space-x-2">
              <span className="space-x-1 text-[rgb(145,158,171)]">
                <span>size: </span>
                <span className="text-white p-1 bg-[rgba(145,158,171,0.16)] text-xs font-medium rounded-md">
                  {item.sizeProd}
                </span>
              </span>
              <hr className="border h-4 border-[rgba(145,158,171,0.24)]" />
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.colorProd }}
              />
            </div>
          </div>
        </div>,
        <div>{item.priceProd.toLocaleString("vi")} đ</div>,
        <div className="relative hover:border-white select-none flex items-center rounded-lg w-[78px] py-1 justify-around border border-[rgba(145,158,171,0.32)]">
          <button>
            <BiMinus
              onClick={() =>
                handleMinus(item.idProd, item.userId, item.quantityProd)
              }
            />
          </button>
          {item.quantityProd}
          <button>
            {" "}
            <BiPlus onClick={() => handlePlus(item.idProd, item.userId)} />
          </button>
        </div>,
        <div>
          {(item.priceProd * item.quantityProd).toLocaleString("vi")} đ
        </div>,
        <div
          onClick={() => handleDeleteProdCart(item.idProd, item.userId)}
          className="hover:bg-[rgba(145,158,171,0.08)] p-2 rounded-full text-base cursor-pointer"
        >
          <RiDeleteBinLine className="text-[rgb(145,158,171)]" />
        </div>,
      ];
    });
  }, [listProductBuy]);

  useEffect(() => {
    if (token) {
      const decoded: any = jwt_decode(token);
      fetchCart(decoded.id);
    }
  }, []);

  return (
    <>
      <CustomHeader title="Checkout">
        <title>Checkout | Cuc Shoes</title>
      </CustomHeader>
      <section>
        <div className="text-white grid grid-cols-12 mb-10">
          <div className="col-span-8">
            <div className="flex items-center">
              {tabs.map((item, idx) => (
                <div className="flex-1 text-[rgb(145,158,171)]" key={idx}>
                  <div className="relative flex justify-center">
                    {idx !== 0 && (
                      <div className="absolute top-[6px] left-[calc(-50%_+_20px)] right-[calc(50%_+_20px)]">
                        <span
                          className={`border-t-2 block ${
                            listTabOver.includes(item) || currentTab === item
                              ? "border-green-500"
                              : "border-[rgba(145,158,171,0.24)]"
                          }`}
                        />
                      </div>
                    )}
                    <span className="flex flex-col items-center space-y-4">
                      <span
                        className={`${
                          currentTab === item || listTabOver.includes(item)
                            ? "text-green-500"
                            : ""
                        }`}
                      >
                        {listTabOver.includes(item) && currentTab !== item ? (
                          <AiOutlineCheck />
                        ) : (
                          <GoPrimitiveDot />
                        )}
                      </span>
                      <span
                        className={`text-sm font-semibold ${
                          currentTab === item || listTabOver.includes(item)
                            ? "text-white"
                            : ""
                        }`}
                      >
                        {item}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-4" />
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8">
            {currentTab === tabs[0] && (
              <>
                <div className="bg-[rgb(33,43,54)] overflow-hidden rounded-xl">
                  <div className="p-6 pl-3">
                    <span className="text-white text-lg font-bold">
                      Giỏ hàng{" "}
                    </span>
                    <span className="text-[rgb(145,158,171)] text-sm">
                      ({countCard} sản phẩm)
                    </span>
                  </div>
                  <Table columns={column} dataSource={dataSourceCart} />
                </div>
                <Link href="/product">
                  <p className="text-white flex items-center space-x-2 mt-8">
                    <IoIosArrowBack />{" "}
                    <span className="font-bold text-sm">Tiếp Tục Mua Hàng</span>
                  </p>
                </Link>
              </>
            )}
          </div>
          <div className="col-span-4 text-white">
            <div className="bg-[rgb(33,43,54)] rounded-xl p-6">
              <p className="text-lg font-bold ">Tóm tắt đơn hàng</p>
              <div className="mt-6 text-sm space-y-2 border-b border-[rgba(145,158,171,0.24)] pb-4">
                <p className="flex justify-between items-center">
                  <span className="text-[rgb(145,158,171)]">Tổng phụ thu</span>
                  <span className="font-semibold">
                    {listProductBuy
                      .reduce(
                        (acc, cur: listProductBuyProps) =>
                          acc + cur.priceProd * cur.quantityProd,
                        0
                      )
                      .toLocaleString("vi")}{" "}
                    đ
                  </span>
                </p>
                <p className="flex justify-between items-center">
                  <span className="text-[rgb(145,158,171)]">Vận chuyển</span>{" "}
                  <span className="font-semibold">Miễn phí</span>
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="font-bold">Tổng đơn hàng</p>
                <span className="font-semibold text-red-500">
                  {listProductBuy
                    .reduce(
                      (acc, cur: listProductBuyProps) =>
                        acc + cur.priceProd * cur.quantityProd,
                      0
                    )
                    .toLocaleString("vi")}{" "}
                  đ
                </span>
              </div>
            </div>
            {currentTab === tabs[0] && (
              <button
                onClick={() => handleNextTab(currentTab)}
                className="bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-md font-semibold mt-4"
              >
                Tiếp Tục
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
Checkout.getLayout = function getLayout(page: ReactElement) {
  return <MainClient>{page}</MainClient>;
};

export default Checkout;
