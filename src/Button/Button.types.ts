import React from "react";
import { BaseProps, SizeType } from "../_utils/props";

export type ButtonType =
  | "default"
  | "primary"
  | "ghost"
  | "link"
  | "danger"
  | "success";

export interface ButtonProps
  extends BaseProps,
    React.PropsWithRef<JSX.IntrinsicElements["button"]> {
  children?: React.ReactNode;
  btnType?: ButtonType;
  loading?: boolean;
  disabled?: boolean;
  size?: SizeType;
}
