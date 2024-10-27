import { useQuery } from "@tanstack/react-query";
import { getTasks } from "./api";

export const TodoList = () => {
  const { data, error, isPending } = useQuery({ queryKey: ["tasks", "list"], queryFn: getTasks });

  if (isPending) return <>loading...</>;

  if (error) return <>error: {JSON.stringify(error)}</>;

  return (
    <div>
      <h2>Todo List</h2>
      {data.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
};
