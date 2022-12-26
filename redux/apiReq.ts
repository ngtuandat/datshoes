import { AnyAction } from "@reduxjs/toolkit";
import { NextRouter } from "next/router";
import { Dispatch } from "react";
import { newUser, User } from './../interfaces/user.d';
import { CreateAcc, LoginUser } from './../services/user/index';

import {
    loginFailed,
    loginSuccess,
    registerFailed,
    registerSuccess,
} from "./authSlice";

export const registerUser = async (
    user: newUser,
    dispatch: Dispatch<AnyAction>,
    router: NextRouter
) => {
    try {
        await CreateAcc(user);
        dispatch(registerSuccess());
        router.push("/login");
    } catch (error) {
        dispatch(registerFailed(error));
    }
};

export const loginUserCheck = async (user: User, dispatch: Dispatch<AnyAction>, router: NextRouter) => {
    try {
        const res = await LoginUser(user)
        dispatch(loginSuccess(res.data))
        router.push('/')
    } catch (error) {
        dispatch(loginFailed(error))
    }
}