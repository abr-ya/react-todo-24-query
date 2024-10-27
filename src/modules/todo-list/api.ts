import { todoData } from "./todoData";

export type TodoDto = {
  id: string;
  text: string;
  done: boolean;
  userId: string;
};

export const getTasks = () =>
  new Promise<TodoDto[]>((res) => {
    setTimeout(() => {
      res(todoData);
    }, 1000);
  });
