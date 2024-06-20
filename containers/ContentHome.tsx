import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/router";
import { ListProduct } from "../interfaces/product";
import { GetUsersQuery } from "../interfaces/user";
import { getAllProducts } from "../services/product";
import Link from "next/link";
import PaginationClient from "../components/Pagination/PaginationClient";

const minimalUi = {
  offscreenP: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  offscreenH: {
    y: -100,
    opacity: 0,
  },
};

const inputVariant = {
  open: {
    width: "800px",
    transition: {
      duration: 0.4,
    },
  },
  closed: {},
};
const DEFAULT_PRODUCTS_LIMIT = 5;
const ContentHome = () => {
  const [focused, setFocused] = useState(false);
  const [limitValue, setLimitValue] = useState(DEFAULT_PRODUCTS_LIMIT);

  const [products, setProducts] = useState<ListProduct[]>();
  const [totalProduct, setTotalProduct] = useState(0);
  const images = [
    // "./images/logo.png",
    // "./images/logo1.jpg",
    // "./images/bannerhotel.jpeg",
    "./images/anh1.jpg",
    "./images/anh2.jpg",
    // "./images/anh3.jpg",
    // "./images/anh4.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  console.log(currentImageIndex, "currentImageIndex");

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex + 1 < images.length ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex + 1 < images.length ? prevIndex + 1 : 0
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const router = useRouter();
  const fetchProducts = async (query?: GetUsersQuery): Promise<void> => {
    try {
      const { data } = await getAllProducts({
        ...query,
        limit: limitValue,
        page: query?.page ? query?.page : 1,
      });

      setProducts(data.product);
      setTotalProduct(data.total);
    } catch (error) {
      console.log(error);
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
    fetchProducts(router.query);
  }, [router.isReady, router.query]);

  const handleQuerySearch = (value: string) => {
    const query = { ...router.query, query: value };

    router.push({ pathname: "/product", query }, undefined, {
      shallow: true,
    });
  };
  return (
    <div className="max-w-sm md:max-w-2xl lg:max-w-[1200px] mx-auto">
      {/* <div className="py-24 lg:py-32">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.p
            initial="offscreenP"
            whileInView="onscreen"
            variants={minimalUi}
            className="uppercase text-[rgb(99,115,129)] text-xs font-bold -mt-2 mb-2"
          >
            Cuc shoes
          </motion.p>
          <motion.h1
            initial="offscreenH"
            whileInView="onscreen"
            variants={minimalUi}
            className="text-white font-extrabold lg:text-[40px] text-4xl"
          >
            Cuc Shoes
            <br />
            có gì?
          </motion.h1>
        </div>
        <motion.div
          initial="offscreenP"
          whileInView="onscreen"
          variants={minimalUi}
          className="hidden lg:grid grid-cols-3 gap-20 items-center"
        >
          <div className="col-span-3 lg:col-span-1 px-10 py-20 text-center h-fit shadow-lg rounded-2xl lg:shadow-none">
            <img
              className="mx-auto"
              src="/images/home/minimal-helps/ic_make_brand.svg"
              alt=""
            />
            <div>
              <h1 className="mb-4 mt-16 font-bold text-xl text-white">
                Branding
              </h1>
              <p className="text-base text-[rgb(145,158,171)] font-normal">
                Consistent design makes it easy to brand your own.
              </p>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-1 px-10 py-20 text-center h-fit shadow-lg lg:shadow-ui rounded-2xl">
            <img
              className="mx-auto"
              src="/images/home/minimal-helps/ic_design.svg"
              alt=""
            />
            <div>
              <h1 className="mb-4 mt-16 font-bold text-xl text-white">
                UI & UX Design
              </h1>
              <p className="text-base text-[rgb(145,158,171)] font-normal">
                The kit is built on the principles of the atomic design system.
                It helps you to create projects fastest and easily customized
                packages for your projects.
              </p>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-1 px-10 py-20 text-center h-fit shadow-lg rounded-2xl lg:shadow-none">
            <img
              className="mx-auto"
              src="/images/home/minimal-helps/ic_development.svg"
              alt=""
            />
            <div>
              <h1 className="mb-4 mt-16 font-bold text-xl text-white">
                Development
              </h1>
              <p className="text-base text-[rgb(145,158,171)] font-normal">
                Easy to customize and extend, saving you time and money.
              </p>
            </div>
          </div>
        </motion.div>
        <div className="lg:hidden grid grid-cols-3">
          <motion.div
            initial="offscreenP"
            whileInView="onscreen"
            variants={minimalUi}
            className="col-span-3 lg:col-span-1 px-10 py-20 text-center h-fit shadow-lg rounded-2xl lg:shadow-none"
          >
            <img
              className="mx-auto"
              src="/images/home/minimal-helps/ic_make_brand.svg"
              alt=""
            />
            <div>
              <h1 className="mb-4 mt-16 font-bold text-xl text-white">
                Branding
              </h1>
              <p className="text-base text-[rgb(145,158,171)] font-normal">
                Consistent design makes it easy to brand your own.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="offscreenP"
            whileInView="onscreen"
            variants={minimalUi}
            className="col-span-3 lg:col-span-1 px-10 py-20 text-center h-fit shadow-lg lg:shadow-ui rounded-2xl"
          >
            <img
              className="mx-auto"
              src="/images/home/minimal-helps/ic_design.svg"
              alt=""
            />
            <div>
              <h1 className="mb-4 mt-16 font-bold text-xl text-white">
                UI & UX Design
              </h1>
              <p className="text-base text-[rgb(145,158,171)] font-normal">
                The kit is built on the principles of the atomic design system.
                It helps you to create projects fastest and easily customized
                packages for your projects.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="offscreenP"
            whileInView="onscreen"
            variants={minimalUi}
            className="col-span-3 lg:col-span-1 px-10 py-20 text-center h-fit shadow-lg rounded-2xl lg:shadow-none"
          >
            <img
              className="mx-auto"
              src="/images/home/minimal-helps/ic_development.svg"
              alt=""
            />
            <div>
              <h1 className="mb-4 mt-16 font-bold text-xl text-white">
                Development
              </h1>
              <p className="text-base text-[rgb(145,158,171)] font-normal">
                Easy to customize and extend, saving you time and money.
              </p>
            </div>
          </motion.div>
        </div>
      </div> */}
      <div className="mt-[100px] max-w-sm lg:max-w-[1200px] mx-auto">
        <form className="flex items-center text-xl mb-12">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative  lg:w-full left-[200px]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <CiSearch className="text-[rgb(99,115,129)]" />
            </div>
            <motion.input
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              variants={inputVariant}
              initial="close"
              // animate={focused ? "open" : "closed"}
              animate="open"
              onChange={(e) => handleQuerySearch(e.target.value)}
              type="text"
              id="simple-search"
              className="bg-transparent text-white border text-base placeholder:text-[rgb(99,115,129)] border-[rgba(145,158,171,0.32)] outline-none rounded-lg block lg:w-full pl-10 p-2 "
              placeholder="Search..."
            />
          </div>
          <div />
        </form>
        <div className="grid grid-cols-10">
          <div className="col-span-7">
            <img
              className="w-full"
              src={images[currentImageIndex]}
              alt="Slideshow"
            />
            <div className="slideshow-controls mt-4">
              <button
                className="hover:cursor-pointer mr-2"
                onClick={goToPreviousImage}
              >
                Previous
              </button>
              <button onClick={goToNextImage}>Next</button>
            </div>
          </div>
          <div className="col-span-3">
            <img src="./images/anh2.jpg" alt="" />
            <img src="./images/anh2.jpg" alt="" />
          </div>
        </div>
        {products && products?.length > 0 ? (
          <div className="grid grid-cols-4 gap-6 mb-10">
            {products.map((product, idx) => (
              <Link
                href={`/product/${product?.id}`}
                className="bg-product col-span-4 lg:col-span-1 rounded-lg cursor-pointer hover:-translate-y-1 transition-all duration-200"
                key={idx}
              >
                <div className="p-2">
                  <img
                    className="rounded-lg w-[262px] h-[262px] object-cover"
                    src={product?.listImage[0]}
                    alt={product?.name}
                  />
                </div>
                <div className="py-6 px-2">
                  <h1 className="text-base font-semibold text-white">
                    {product?.name}
                  </h1>
                  <div className="flex items-center justify-between mt-5 px-3">
                    <div className="flex items-center">
                      {product?.color.map((col, idx) => (
                        <div
                          className="h-3 w-3 rounded-full"
                          key={idx}
                          style={{ backgroundColor: col }}
                        />
                      ))}
                    </div>
                    <p className="text-base font-semibold text-white">
                      {product?.price.toLocaleString("vi")} đ
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="flex w-full justify-center items-center text-xl sm:text-2xl font-bold py-40 opacity-20">
            Không có sản phẩm bạn đang tìm!!
          </p>
        )}
        <PaginationClient
          current={Number(router.query.page || 1)}
          pageSize={limitValue}
          total={totalProduct}
          onChange={onChangePage}
        />
      </div>
    </div>
  );
};

export default ContentHome;
