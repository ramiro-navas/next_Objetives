"use client";
import React from "react";
import Caroucel from "@/components/home/Caroucel";
import Logo from "@/components/home/Logo";
import Options from "@/components/home/Options";
import Stadistic from "@/components/home/Stadistic";
import Objetive from "@/components/ui/Objetive";
import { Objetive as ObjetiveInterface } from "@/interface/objetive";
import { Form } from "@/components/ui";
import { useAppContext } from "@/Context";

function Feed() {
  const {
    formState,
    newObjetive,
    objetives,
    setFormState,
    setNewObjetive,
    setObjetives,
    auth,
    setAuth,
    setStadistic,
    stadistic,
    profile,
    handleObjetive,
    stateObjetive,
    setStateObjetive,
    stateMoney,
  } = useAppContext();

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
              total={stateMoney}
            />
          </div>
          <div className="flex justify-end ">
            <Stadistic
              title="Todos los objetivos"
              progress={stadistic.objetivesComplete}
              total={stateObjetive}
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
      {formState && <Form />}
    </div>
  );
}

export default Feed;
