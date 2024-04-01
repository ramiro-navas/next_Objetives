import React from "react";
import { Button, Input } from "./index";
import { RxCross1 } from "react-icons/rx";

type Props = {
  setFormState: (formState: boolean) => void;
};

export function Form(props: Props) {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center bg-semi">
      <form className="w-600 h-200 rounded-16 bg-back grid px-86 items-center relative">
        <button
          className="text-20 text-titles absolute top-2 right-4"
          onClick={(e: any) => {
            e.preventDefault();
            props.setFormState(false);
          }}
        >
          {" "}
          <RxCross1 />{" "}
        </button>
        <h2 className="font-roboto font-extrabold text-titles text-30 text-center">
          Nuevo objetivo
        </h2>
        <div className="flex">
          <Input placeholder="Objetivo" type="text" name="title" required />
          <Input placeholder="Cantidad" type="number" name="amount" required />
          <input type="file" name="image" />
        </div>
        <button className="w-125 h-30 rounded-16 bg-titles flex items-center justify-center ">
          Agregar
        </button>
      </form>
    </div>
  );
}
