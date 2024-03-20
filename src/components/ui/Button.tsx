import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: Props) {
  return (
    <button
      className="w-full h-button bg-titles rounded-16 my-button flex items-center justify-center font-bold text-20 text-back"
      {...props}
    >
      {children}
    </button>
  );
}
