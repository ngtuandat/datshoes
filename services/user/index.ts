import axios from "axios";
import { newUser, Role, User } from "../../interfaces/user";
import { GetUsersQuery } from './../../interfaces/user.d';

export function CreateAcc(user: newUser) {
  return axios.post("/api/user/register", { user });
}

export function LoginUser(user: User) {
  return axios.post('api/user/login', { user })
}

export const getAllUser = async (query: GetUsersQuery) => {
  return await axios.get("/api/user/account", { params: query });
};

export const updateAdmin = async (user: Role) => {
  return await axios.put("/api/user/account", { user });
};
