import * as React from "react";
import icon from "./pizza.svg";
import "./headers.css";

export const Header: React.FC = () => (
  <header>
    <img src={icon} alt="The Pizza Problem" width="150" height="150" />
    <h1>The Pizza Problem</h1>
    <p>
      Finally, we have an answer to the problem that has bothered humanity since the beginning of time… should you buy
      the standard pizza or the big one?
    </p>
  </header>
);
