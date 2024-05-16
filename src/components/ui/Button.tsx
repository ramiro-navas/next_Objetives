import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: Props) {
  return (
    <button
      className="w-full h-32 bg-titles rounded-16 my-16 flex items-center justify-center font-bold text-20 text-back"
      {...props}
    >
      {children}
    </button>
  );
}
