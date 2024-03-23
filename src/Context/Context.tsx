"use client";
import { createContext } from "react";

const Context = createContext({});

export const ContextProvider = ({ children }: any) => {
  const hola:string = "hola mundo"
  return <Context.Provider value={{hola}}>{children}</Context.Provider>;
};

export default Context;
