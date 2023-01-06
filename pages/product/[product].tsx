import React, { Fragment, ReactElement, useState } from "react";
import { CustomHeader } from "../../components/Header/CustomHeader";
import MainClient from "../../components/Layouts/MainClient";
import { BsCheck } from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";
import {
  MdOutlineAddShoppingCart,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { BiMinus, BiPlus } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import SwiperClass from "swiper/types/swiper-class";

const productDetail = {
  images: [
    "https://api-prod-minimal-v4.vercel.app/assets/images/products/product_3.jpg",
    "https://api-prod-minimal-v4.vercel.app/assets/images/products/product_4.jpg",
  ],
  name: "Relaxed Adjustable Strap Slingback Sandal",
  price: 100000,
  color: ["red", "blue"],
  size: [39, 40, 41, 42, 43],
};

const ProductDetail = () => {
  const [colorCheck, setColorCheck] = useState<string>("");
  const [sizeValue, setSizeValue] = useState<number>();
  const [quantity, setQuantity] = useState<number>(1);
  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(1);
    }
  };

  const a = 3;

  return (
    <>
      <CustomHeader>
        <title>Details</title>
      </CustomHeader>
      <div className="max-w-[1200px] mx-auto text-white">
        <h1 className="text-2xl font-bold mb-10">Chi tiết sản phẩm</h1>
        <div className="grid grid-cols-12">
          <div className="col-span-7">
            <div className="h-full">
              <Swiper
                loop
                navigation
                modules={[Navigation, Thumbs]}
                grabCursor
                className="select-none product-images-slide rounded-xl"
              >
                {productDetail.images.map((image, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={image} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                loop
                spaceBetween={10}
                slidesPerView={a}
                modules={[Navigation, Thumbs]}
                className="select-none product-images-slide-thumbs max-w-sm mx-auto mt-6"
              >
                <div>
                  {productDetail.images.map((image, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        className="cursor-pointer rounded-xl object-cover"
                        src={image}
                        alt=""
                      />
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </div>
          </div>
          <div className="px-10 pt-8 col-span-5 space-y-5">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">{productDetail.name}</h2>
              <p className="text-xl font-semibold">
                {productDetail.price.toLocaleString("vi")} đồng
              </p>
            </div>
            <div className="border-y border-dashed border-[rgba(145,158,171,0.24)]">
              <div className="my-6 space-y-6">
                <div className="flex items-center justify-between h-10">
                  <p className="text-base font-semibold">Color</p>
                  <div className="flex items-center space-x-2">
                    {productDetail.color.map((color, idx) => (
                      <div key={idx}>
                        <div
                          onClick={() => setColorCheck(color)}
                          className={`flex justify-center items-center rounded-full transition-all cursor-pointer ${
                            colorCheck.includes(color) ? "w-6 h-6" : "w-5 h-5"
                          }`}
                          style={
                            colorCheck.includes(color)
                              ? {
                                  boxShadow: `1px 2px 10px 0px ${color}`,
                                  backgroundColor: color,
                                }
                              : { backgroundColor: color }
                          }
                        >
                          {colorCheck.includes(color) ? (
                            <BsCheck
                              className={`${
                                color === "white" ? "text-black" : "text-white"
                              }`}
                            />
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between h-10">
                  <p className="text-base font-semibold">Size</p>
                  <Menu
                    as="div"
                    className="relative border border-[rgba(145,158,171,0.32)] hover:border-white rounded-lg"
                  >
                    <Menu.Button className="flex items-center justify-between font-bold px-0.5 py-2 space-x-8">
                      <p className="text-white ml-1 text-sm font-semibold">
                        {sizeValue}
                      </p>
                      <MdOutlineKeyboardArrowDown className="text-lg text-icon" />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute left-0 p-2 z-10 mt-2 w-20 origin-top-left rounded-md bg-[rgb(33,43,54)] shadow-2xl focus:outline-none">
                        <div className="py-1">
                          {productDetail.size.map((option, idx) => (
                            <Menu.Item key={idx}>
                              {({ active }) => (
                                <p
                                  onClick={() => setSizeValue(option)}
                                  className={`cursor-pointer rounded-md block py-1.5 px-2 text-sm font-medium text-white ${
                                    active ? "bg-[rgba(145,158,171,0.10)]" : ""
                                  } ${
                                    sizeValue === option
                                      ? "bg-[rgba(145,158,171,0.16)]"
                                      : ""
                                  }`}
                                >
                                  {option}
                                </p>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
                <div className="flex items-center justify-between h-10">
                  <p className="text-base font-semibold">Số lượng</p>
                  <div className="relative hover:border-white select-none flex items-center rounded-lg w-[78px] py-1 justify-around border border-[rgba(145,158,171,0.32)]">
                    <button>
                      <BiMinus onClick={handleMinus} />
                    </button>
                    {quantity}
                    <button>
                      {" "}
                      <BiPlus onClick={() => setQuantity(quantity + 1)} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-1 px-5 py-3 text-base font-bold rounded-lg text-[rgb(33,43,54)] bg-[rgb(255,171,0)] hover:shadow-[0_15px_20px_-15px_rgb(255,171,0)]">
                <MdOutlineAddShoppingCart />
                <p>Thêm vào giỏ hàng</p>
              </button>
              <button className="flex-1 px-5 py-3 text-base font-bold rounded-lg bg-green-500  hover:shadow-[0_15px_20px_-15px] hover:shadow-green-500">
                <p>Mua ngay</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProductDetail.getLayout = function getLayout(page: ReactElement) {
  return <MainClient>{page}</MainClient>;
};

export default ProductDetail;
