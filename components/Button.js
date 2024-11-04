import React from "react";
import { FiDownload } from "react-icons/fi";

const Button = ({
  label = "Download CV",
  onClick,
  variant = "green",
  size = "medium",
}) => {
  const baseStyle =
    "flex items-center justify-center font-semibold border rounded-full transition-all duration-300 ease-in-out focus:outline-none transform hover:scale-105";

  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const variantStyles = {
    green:
      "text-green-500 border-green-500 text-basehover:bg-accent hover:text-primary",
    blue: "text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white",
    red: "text-red-500 border-red-500 hover:bg-red-500 hover:text-white",
  };

  const style = `${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]}`;

  return (
    <button onClick={onClick} className={style}>
      {label}
      <FiDownload className="ml-2" />
    </button>
  );
};

export default Button;
