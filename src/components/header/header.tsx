import * as React from "react";
import icon from "./pizza.svg";
import "./headers.css";

export const Header: React.FC<{}> = (props) => (
  <header>
    <h1>The Pizza Problem</h1>
    <img src={icon} alt="The Pizza Problem" width="150" height="150" />
  </header>
);
