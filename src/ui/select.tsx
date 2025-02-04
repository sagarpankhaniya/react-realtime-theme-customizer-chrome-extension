import { SelectHTMLAttributes } from "react";
import clsx from "clsx";

type Options = { value: string; label: string };

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: Array<Options>;
};

function Select(props: SelectProps) {
  return (
    <select
      data-testid="select"
      {...props}
      className={clsx(
        "outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",
        props.className
      )}
    >
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
