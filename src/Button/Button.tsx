import React, { useContext } from "react";
import { ButtonProps } from "./Button.types";
import { getPrefixCls } from "../_utils/generals";
import { ConfigContext } from "../config-provider/config-context";
import classNames from "classnames";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const {
      size = "md",
      btnType = "default",
      loading = false,
      disabled = false,
      onClick,
      children,
      className,
      prefixCls: customisedCls,
      ...otherProps
    } = props;

    const configContext = useContext(ConfigContext);
    const prefixCls = getPrefixCls(
      "btn",
      configContext.prefixCls,
      customisedCls
    );
    const btnSize = props.size || configContext.componentSize || size;

    const cls = classNames(
      prefixCls,
      `${prefixCls}_${btnSize}`,
      {
        [`${prefixCls}_${btnType}`]: btnType,
        [`${prefixCls}_disabled`]: disabled,
      },
      className
    );

    const buttonOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) {
        return;
      }
      onClick && onClick(e);
    };

    const renderIcon = (): React.ReactElement | null => {
      if (loading) {
        return <span className={`${prefixCls}__loader`} />;
      }
      return null;
    };

    return (
      <button
        {...otherProps}
        disabled={disabled}
        onClick={buttonOnClick}
        data-testid="Button"
        className={cls}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
