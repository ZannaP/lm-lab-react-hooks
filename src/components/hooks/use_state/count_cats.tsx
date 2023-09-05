import { useState } from "react";

export function CountCats() {
  const [cats, setCats] = useState(["🐈"]);

  const catsLength = cats.length;

  function handleClick() {
    setCats([...cats, "🐈"]);
  }

  return (
    <>
      <h2>useState</h2>

      <p>{cats}</p>

      <button onClick={handleClick}>There are {catsLength} cats 🥳</button>
    </>
  );
}
