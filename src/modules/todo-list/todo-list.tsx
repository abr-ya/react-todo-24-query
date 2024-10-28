import { useQuery } from "@tanstack/react-query";
import { todoListApi } from "./api";

export const TodoList = () => {
  const { data, error, isPending } = useQuery({ queryKey: ["tasks", "list"], queryFn: todoListApi.getTodoList });

  if (isPending) return <>loading...</>;

  if (error) return <>error: {JSON.stringify(error)}</>;

  console.log(data);

  if (!data) {
    console.log("Temp line for undefined data! == ToDo!!!");

    return null;
  }

  return (
    <div>
      <h2>Todo List</h2>
      {data.data.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
};
