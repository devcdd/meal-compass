import { MCButton } from "./Button.css.ts";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  width?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={MCButton}
      style={{
        width: props.width ? `${props.width}` : "100%", // width를 직접 설정
      }}
      {...props} // 나머지 props 전파
    >
      {props.children}
    </button>
  );
};

export default Button;
