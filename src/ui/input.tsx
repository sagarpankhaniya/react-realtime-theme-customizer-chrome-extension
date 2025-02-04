import {  InputHTMLAttributes } from "react";
import clsx from "clsx";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input(props:InputProps) {
  return (
    <input
      {...props}
      className={clsx(
        "outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4",
        props.className
      )}
    />
  );
}

export default Input;
