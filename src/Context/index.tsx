"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { Objetive as ObjetiveInterface } from "@/interface/objetive";
import { ContextType } from "@/types/indexTypes";
import { Stadistic as StadisticInterface } from "@/interface/stadistic";
import { Auth as AuthInterface } from "@/interface/auth";
import { Credential } from "@/interface/login";

const AppContext = createContext<ContextType>({
  objetives: [],
  setObjetives: () => {},
  formState: false,
  setFormState: () => {},
  newObjetive: {
    title: "",
    amount: 0,
    progress: 0,
    image: "",
  },
  setNewObjetive: () => {},
  auth: {
    email: "",
    name: "",
  },
  setAuth: () => {},
  stadistic: {
    objetives: 0,
    objetivesComplete: 0,
    money: 0,
    moneyComplete: 0,
  },
  setStadistic: () => {},
  handleObjetive: () => {},
  profile: () => {},
  createObjetive: () => {},
  handleSubmit: ()=>{},
  handleChange: ()=> {},
  loginPassword: true,
  setLoginPassword: ()=>{},
  credentials: {
    email: "",
    password: "",
  },
  setCredentials:()=>{},
  getProfile: ()=>{},
  registerPassword: true,
  setRegisterPassword: ()=>{},
  registerConfirmPassword: true,
  setRegisterConfirmPassword: ()=>{},
});

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [objetives, setObjetives] = useState<ObjetiveInterface[]>([]);
  const [formState, setFormState] = useState<boolean>(false);
  const [registerPassword, setRegisterPassword] = useState<boolean>(true);
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState<boolean>(true);
  const [newObjetive, setNewObjetive] = useState<ObjetiveInterface>({
    title: "",
    amount: 0,
    progress: 0,
    image: "",
  });
  const [stadistic, setStadistic] = useState<StadisticInterface>({
    objetives: 0,
    objetivesComplete: 0,
    money: 0,
    moneyComplete: 0,
  });
  const [auth, setAuth] = useState<AuthInterface>({
    email: "",
    name: "",
  });
  const handleObjetive = (e: any) => {
    setNewObjetive({
      ...newObjetive,
      [e.target.name]: e.target.value,
    });
  };

  const profile = async () => {
    const request = await fetch("/api/user/profile");
    const data = await request.json();
    setAuth(data.user);
    const obRequest = await fetch(`/api/objetive/get/${data.user.id}`, {
      method: "GET",
    });
    const obData = await obRequest.json();
    setObjetives(obData.objetives);
    return data.user;
  };
  const createObjetive = async () => {
    if (newObjetive.title !== "") {
      try {
        const response = await fetch("/api/objetive/create", {
          method: "POST",
          body: JSON.stringify({
            title: newObjetive.title,
            amount: newObjetive.amount,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        if (data.status === "success") {
          setObjetives([...objetives, data.objetive]);
          setFormState(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const [loginPassword, setLoginPassword] = useState<boolean>(true);
  const [credentials, setCredentials] = useState<Credential>({
    email: "",
    password: "",
  });
  const handleChange = (e: any) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const request = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    });
    const data = await request.json();
    console.log(data);
  };

  const getProfile = async (e: any) => {
    e.preventDefault();
    const request = await fetch("/api/user/profile");
    const data = await request.json();
    console.log(data);
  };

  useEffect(() => {
    profile();
  }, []);

  return (
    <AppContext.Provider
      value={{
        objetives,
        setObjetives,
        formState,
        setFormState,
        newObjetive,
        setNewObjetive,
        stadistic,
        setStadistic,
        auth,
        setAuth,
        handleObjetive,
        profile,
        createObjetive,
        handleChange,
        handleSubmit,
        loginPassword,
        setLoginPassword,
        credentials,
        setCredentials,
        getProfile,
        registerPassword,
        setRegisterPassword,
        registerConfirmPassword,
        setRegisterConfirmPassword,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
