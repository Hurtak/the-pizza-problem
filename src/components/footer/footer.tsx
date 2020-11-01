import * as React from "react";
import { GoMarkGithub } from "react-icons/go";
import { AiFillTwitterCircle } from "react-icons/ai";
import "./footer.css";

export const Footer: React.FC<{}> = () => (
  <footer>
    <p>
      By
      <a href="https://twitter.com/PetrHurtak">
        <AiFillTwitterCircle size={18} /> PetrHurtak
      </a>
    </p>
    <p>
      Code on
      <a href="https://github.com/hurtak/pizza-man">
        <GoMarkGithub size={18} /> GitHub
      </a>
    </p>
  </footer>
);
