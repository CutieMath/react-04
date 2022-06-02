import React from "react";

const Button = ({ bgColor, color, size, text, borderRadius }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-2 hover:translate-x-0.5 hover:translate-y-0.5`}
    >
      {text}
    </button>
  );
};

export default Button;
