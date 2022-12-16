import React, { ReactElement } from "react";
import MainCleint from "../components/Layouts/MainCleint";
import BackHome from "../containers/BackHome";
import ContentHome from "../containers/ContentHome";
import { CustomHeader } from "./../components/Header/CustomHeader";

const Home = () => {
  return (
    <div>
      <CustomHeader>
        <title>Trang Chủ</title>
      </CustomHeader>
      <BackHome />
      <div className="bg-dark w-full z-[1200] relative mt-[100vh] ">
        <ContentHome />
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainCleint>{page}</MainCleint>;
};

export default Home;
