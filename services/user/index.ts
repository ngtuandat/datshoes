import axios from "axios";
import { newUser, User } from "../../interfaces/user";

export function CreateAcc(user: newUser) {
  return axios.post("/api/user/register", { user });
}

export function LoginUser(user: User) {
  return axios.post('api/user/login', { user })
}

