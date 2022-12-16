import React from "react";
import { AiFillApi, AiOutlineSketch } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaFigma } from "react-icons/fa";

const BackHome = () => {
  return (
    <div className=" bg-home-dark w-full h-screen fixed top-0 left-0">
      <div className="grid grid-cols-12 h-screen gap-24 relative max-w-[1200px] mx-auto">
        <div className="-mt-[18%] col-span-6 row-start-1 text-center flex flex-col justify-center items-center px-20 space-y-5">
          <div>
            <h2 className="font-extrabold text-5xl leading-[1.33333] text-white">
              Start <br />
              shopping at
            </h2>
          </div>
          <div>
            <h1 className="text-8xl bg-text -mt-1">Shoes</h1>
          </div>
          <div>
            <p className="text-white text-sm my-2 leading-6 font-normal">
              Ở đây các bạn sẽ có được những sản phẩm đang nổi lên và yên tâm về
              giá thành và chất lượng sản phẩm!
            </p>
          </div>
          <div className="flex space-x-3">
            <button className="flex items-center space-x-1 bg-white text-base border border-transparent font-bold px-5 py-3 text-[rgb(33,43,54)] rounded-lg hover:bg-opacity-95">
              <AiFillApi className="text-xl" />
              <p>Live Preview</p>
            </button>
            <button className="flex items-center space-x-1 border border-white text-base font-bold px-5 py-3 text-white rounded-lg hover:bg-white hover:bg-opacity-5">
              <RxOpenInNewWindow className="text-xl" />
              <p>Design Preview</p>
            </button>
          </div>
          <div className="text-white opacity-40 pt-10">
            <p className="uppercase font-bold text-xs">Available for</p>
            <div className="flex space-x-3 text-2xl mt-5 leading-10 items-start justify-center">
              <AiOutlineSketch />
              <FaFigma />
              <IoLogoJavascript />
              <SiTypescript />
              <TbBrandNextjs />
            </div>
          </div>
        </div>
        <div className="col-span-6 mt-[88px] absolute -right-[40%] overflow-hidden h-full ">
          <div className="flex">
            <div className="w-[344px] relative flex flex-col">
              <img
                className="absolute img-hero-top"
                src="./images/home/hero_dark_1.png"
                alt=""
              />
              <img
                className="absolute img-hero-bot"
                src="./images/home/hero_dark_1.png"
                alt=""
              />
            </div>
            <div className="w-[720px] relative flex flex-col">
              <img
                className="absolute img-hero-top-r"
                src="./images/home/hero_dark_2.png"
                alt=""
              />
              <img
                className="absolute img-hero-bot-r"
                src="./images/home/hero_dark_2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackHome;
