import React from "react";
import { ReactElement } from "react";
import { CustomHeader } from "../../components/Header/CustomHeader";
import MainAdmin from "../../components/Layouts/MainAdmin";

const Dashboard = () => {
  return (
    <>
      <CustomHeader>
        <title>DashBoard</title>
      </CustomHeader>
      <div className="h-[1000px]">a</div>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <MainAdmin>{page}</MainAdmin>;
};

export default Dashboard;
