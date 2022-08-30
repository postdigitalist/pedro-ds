import React from "react";

const Button = ({
  primary,
  secondary,
  square,
  small,
  icon,
  disabled,
  children,
}) => {
  const primaryClassName = "primaryButton";
  const secondaryClassName = "secondaryButton";
  const smallClassName = "buttonSM";
  const disabledClassName = "disabledButton";
  const squareClassName = "squareButton";
  const Icon = icon;
  return (
    <button
      className={`${primary && primaryClassName} ${
        secondary && secondaryClassName
      } ${small && smallClassName} ${disabled && disabledClassName} ${
        square && squareClassName
      } my-4 lg:my-0`}
    >
      {icon && <Icon className={`${children && "mr-1 w-4"}`} />}
      {children}
    </button>
  );
};

export default Button;
