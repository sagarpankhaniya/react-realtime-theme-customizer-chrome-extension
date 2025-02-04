import { ReactNode } from "react";
import clsx from "clsx";

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

function Heading({ children, className, ...rest }: HeadingProps) {
  return (
    <h1
      data-testid="heading"
      className={clsx(
        "text-2xl font-medium leading-tight tracking-tight text-gray-900",
        className
      )}
      {...rest}
    >
      {children}
    </h1>
  );
}

export default Heading;
