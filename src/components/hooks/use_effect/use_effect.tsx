// make an api call using useEffect
import { useEffect, useState } from "react";

interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export const APICall = () => {
  const [todo, setTodo] = useState<ToDo>();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((responce) => responce.json())
      .then((data) => {
        setTodo(data);
      })
      .catch(console.error);
  }, []);
  return (
    <>
      <h2>useEffect</h2>

      {todo && <p key={todo.id}>{todo.title}</p>}
    </>
  );
};

// for all todos
export const APICallAll = () => {
  const [todo, setTodo] = useState<ToDo[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((responce) => responce.json())
      .then((data) => {
        setTodo(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <h2>useEffect</h2>

      {todo.length &&
        todo.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};
