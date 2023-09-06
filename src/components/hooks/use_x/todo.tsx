import { useEffect, useState } from "react";
import { isError } from "../../../helpers/is_error";
import useTodo from "./use_todo";

/** This is the response that TypiCode gives for the /todos/ endpoint */

export const Todo = () => {
  // const [data, setData] = useState<TodoResponse>();
  // const [isFetching, setIsFetching] = useState(true);

  // const url = "https://jsonplaceholder.typicode.com/todos/1";

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       setIsFetching(false);
  //       if (response.status === 200) {
  //         const json = await response.json();
  //         setData(json);
  //       }
  //     } catch (e: unknown) {
  //       setIsFetching(false);

  //       console.log(isError(e) ? e.message : "Unknown error!");
  //     }
  //   };
  //   fetchData();
  // }, [url]);

  const fetched = useTodo("https://jsonplaceholder.typicode.com/todos/1");
  return (
    <>
      <h2>Custom Hook</h2>

      {fetched.isFetching ? <p>Fetching...</p> : <p>{fetched.data?.title}</p>}
    </>
  );
};
