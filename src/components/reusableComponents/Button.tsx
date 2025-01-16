import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  width: string;
}

const Button: React.FC<ButtonProps> = ({ children, width, ...rest }) => {
  return (
    <button
      className="py-3 bx bg-gray-400 font-[600] text-white rounded-xl"
      style={{ width }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
