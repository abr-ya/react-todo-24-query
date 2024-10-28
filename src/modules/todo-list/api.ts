import axios from "axios";
import { todoData } from "./todoData";

export type TodoDtoV1 = {
  id: string;
  text: string;
  done: boolean;
  userId: string;
};

export type TodoDto = {
  id: number;
  title: string;
  completed: boolean;
  userId: string;
};

const BASE_URL = "http://localhost:8888";

const baseAxios = axios.create({
  baseURL: BASE_URL,
  // baseURL: process.env.API_URL,
});

// interface ITodoListApi {
//   getTodoList: () => AxiosResponse<TodoDto[]>;
// }

export const getTasks = () =>
  new Promise<TodoDtoV1[]>((res) => {
    setTimeout(() => {
      res(todoData);
    }, 1000);
  });

export const todoListApi = {
  getTodoList: () => baseAxios.get<TodoDto[]>("/todos"),
};
