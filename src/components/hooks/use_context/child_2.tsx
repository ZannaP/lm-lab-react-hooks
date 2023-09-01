import { useContext } from "react";
import { darkThemeContext } from "./parent";

export const Child2: React.FC = () => {
  const dark = useContext(darkThemeContext);
  const theme = {
    backgroundColor: dark ? "#333" : "#CCC",
    color: dark ? "white" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return <div style={theme}>Child 2</div>;
};
