// Generated with util/create-component.js
import React from "react";

import { ButtonProps } from "./Button.types";

import "./Button.scss";

const Button: React.FC<ButtonProps> = (props) => (
  <button data-testid="Button" className="default">
    {props.children}
  </button>
);

export default Button;
