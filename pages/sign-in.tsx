import React, { ReactElement } from "react";
import Sign from "../components/Layouts/Sign";
import { CustomHeader } from "./../components/Header/CustomHeader";
import Login from "./../containers/Login";

const SignIn = () => {
  return (
    <div className="w-full">
      <CustomHeader>
        <title>Login | Cuc Shoes</title>
      </CustomHeader>
      <Login />
    </div>
  );
};

SignIn.getLayout = function getLayout(page: ReactElement) {
  return <Sign>{page}</Sign>;
};

export default SignIn;
