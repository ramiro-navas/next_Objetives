"use client";
import Caroucel from "@/components/home/Caroucel";
import Logo from "@/components/home/Logo";
import Options from "@/components/home/Options";
import Stadistic from "@/components/home/Stadistic";
import Objetive from "@/components/ui/Objetive";
import React, { useEffect, useState } from "react";
import { Objetive as ObjetiveInterface } from "@/interface/objetive";
import { Form } from "@/components/ui";
import { title } from "process";
import { Stadistic as StadisticInterface } from "@/interface/stadistic";

interface Auth {
  id?: number;
  email: string;
  name: string;
}

function Feed() {
  const [objetives, setObjetives] = useState<ObjetiveInterface[]>([]);
  const [formState, setFormState] = useState<boolean>(false);
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
  const [auth, setAuth] = useState<Auth>({
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

  useEffect(() => {
    profile();
  }, []);

  return (
    <div className="p-4">
      <div className=" grid grid-cols-2 ">
        <div className="grid">
          <div className="w-full h-70 p-2 rounded-16 flex items-center bg-back">
            <Logo />
          </div>
          <div className="w-full flex items-end">
            <Options setFormState={setFormState} />
            <Caroucel />
          </div>
        </div>
        <div className="w-full grid grid-cols-2">
          <div className="flex justify-end ">
            <Stadistic
              title="Dinero total"
              progress={stadistic.moneyComplete}
              total={stadistic.money}
            />
          </div>
          <div className="flex justify-end ">
            <Stadistic
              title="Todos los objetivos"
              progress={stadistic.objetivesComplete}
              total={stadistic.objetives}
            />
          </div>
        </div>
      </div>
      <section className="bg-back w-full h-fullv mt-21 p-3 rounded-16 ">
        <h2 className="font-roboto font-extrabold text-center text-titles text-30">
          Objetivos
        </h2>
        <div className="w-full h-full mt-10 p-3 rounded-16 grid grid-cols-2">
          {objetives.length >= 1 ? (
            <>
              {objetives.map((obje: ObjetiveInterface) => {
                return (
                  <div key={obje.id}>
                    <Objetive
                      title={obje.title}
                      amount={obje.amount}
                      progress={obje.progress}
                      image={obje.image}
                    />
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <h2>No hay objetivos</h2>
            </>
          )}
        </div>
      </section>
      {formState && (
        <Form
          handleObjetive={handleObjetive}
          setFormState={setFormState}
          newObjetive={newObjetive}
          setNewObjetive={setNewObjetive}
          objetives={objetives}
          setObjetives={setObjetives}
        />
      )}
    </div>
  );
}

export default Feed;
