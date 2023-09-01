import { useContext } from "react";
import { darkThemeContext } from "./parent";
export const Child1: React.FC = () => {
  const dark = useContext(darkThemeContext);
  const theme = {
    backgroundColor: dark ? "#212121" : "#CCC",
    color: dark ? "white" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return <div style={theme}>Child 1</div>;
};
