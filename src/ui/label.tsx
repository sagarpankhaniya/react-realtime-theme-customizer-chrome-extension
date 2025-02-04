import { LabelHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & { children: ReactNode };

function Label(props: LabelProps) {
  return (
    <label
      className={clsx(
        "mb-2 text-sm font-medium text-gray-900",
        props.className
      )}
    >
      {props.children}
    </label>
  );
}

export default Label;
