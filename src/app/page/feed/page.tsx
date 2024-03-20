import Caroucel from "@/components/home/Caroucel";
import Logo from "@/components/home/Logo";
import Options from "@/components/home/Options";
import Stadistic from "@/components/home/Stadistic";
import Objetive from "@/components/ui/Objetive";
import React from "react";

function Feed() {
  return (
    <div className="p-4">
      <div className=" grid grid-cols-2 ">
        <div className="grid">
          <div className="w-full h-logo p-2 rounded-16 flex items-center bg-back">
            <Logo />
          </div>
          <div className="w-full flex items-end">
            <Options />
            <Caroucel />
          </div>
        </div>
        <div className="w-full grid grid-cols-2">
          <div className="flex justify-end ">
            <Stadistic title="Dinero total" />
          </div>
          <div className="flex justify-end ">
            <Stadistic title="Todos los objetivos" />
          </div>
        </div>
      </div>
      <div>
       <Objetive /> 
      </div>
    </div>
  );
}

export default Feed;
