import React, { useEffect } from "react";
import { ReactElement } from "react";
import { CustomHeader } from "../../components/Header/CustomHeader";
import MainAdmin from "../../components/Layouts/MainAdmin";
import Analysis from "../../containers/Charts/Analysis";
import Area from "../../containers/Charts/Area";
import MultipleRadialbars from "../../containers/Charts/MultipleRadialbars";

const Dashboard = () => {
  return (
    <div className="text-white">
      <CustomHeader>
        <title>DashBoard</title>
      </CustomHeader>
      <div className="grid grid-cols-3 gap-6">
        <Analysis
          name="Sản phẩm được bán"
          parameter={768}
          color="rgb(0,170,85)"
          percent="+2.6%"
        />
        <Analysis
          name="Tổng số dư"
          parameter={18765}
          color="rgb(0,184,217)"
          percent="-0.1%"
        />
        <Analysis
          name="Lợi nhuận bán hàng"
          parameter={4876}
          color="rgb(248,167,2)"
          percent="+0.6%"
        />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="col-span-1">
          <MultipleRadialbars />
        </div>
        <div className="col-span-2">
          <Area />
        </div>
      </div>
    </div>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <MainAdmin>{page}</MainAdmin>;
};

export default Dashboard;
