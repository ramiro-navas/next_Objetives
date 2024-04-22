import React, { useState } from "react";
import { Button, Input } from "./index";
import { RxCross1 } from "react-icons/rx";
import { BiImageAdd } from "react-icons/bi";
import { Objetive } from "@/interface/objetive";

type Props = {
  handleObjetive: (e: any) => void;
  setFormState: (formState: boolean) => void;
  newObjetive: Objetive;
  setNewObjetive: (newObjetive: Objetive) => void;
  objetives: Objetive[];
  setObjetives: (objetives: Objetive[]) => void;
};

export function Form(props: Props) {

  const createObjetive = async () => {
    if (props.newObjetive.title !== "") {
      try {
        const response = await fetch("/api/objetive/create", {
          method: "POST",
          body: JSON.stringify({
            title: props.newObjetive.title,
            amount: props.newObjetive.amount,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        
        if (data.status === "success") {
          props.setObjetives([...props.objetives, data.objetive]);
          props.setFormState(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };


  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center bg-semi">
      <form className="w-600 h-200 rounded-16 bg-back grid px-86 items-center justify-center relative">
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
          <Input
            placeholder="Objetivo"
            type="text"
            name="title"
            required
            onChange={props.handleObjetive}
          />
          <Input
            placeholder="Cantidad"
            type="number"
            name="amount"
            required
            onChange={props.handleObjetive}
          />
          <div className="bg-transparent relative cursor-pointer">
            <input
              type="file"
              name="image"
              id="image"
              className="absolute top-0 right-0 left-0 bottom-0 opacity-0 cursor-pointer"
            />
            <BiImageAdd className="w-40 h-40 text-titles  cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="w-125 h-30 rounded-16 bg-titles flex items-center justify-center "
            onClick={(e: any) => {
              e.preventDefault();
              //console.log(props.newObjetive);
              createObjetive();
            }}
          >
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
}
