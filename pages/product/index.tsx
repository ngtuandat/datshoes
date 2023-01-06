import React, { ReactElement } from "react";
import { CustomHeader } from "../../components/Header/CustomHeader";
import MainClient from "../../components/Layouts/MainClient";
import FilterContent from "../../containers/FilterContent";
import ProductContent from "../../containers/ProductContent";

const Product = () => {
  return (
    <>
      <CustomHeader>
        <title>Sản phẩm | Cuc Shoes</title>
      </CustomHeader>
      <div className="max-w-[1200px] mx-auto text-white">
        <h1 className="text-2xl font-bold">Sản phẩm</h1>
        <FilterContent />
        <ProductContent />
      </div>
    </>
  );
};

Product.getLayout = function getLayout(page: ReactElement) {
  return <MainClient>{page}</MainClient>;
};

export default Product;
