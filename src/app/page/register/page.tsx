"use client";
import { Input, Button } from "@/components/ui";
import { logo } from "@/helpers/helpers";
import { useState } from "react";
import { BiLowVision } from "react-icons/bi";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { Title } from "@/components/ui/Title";

function Register() {
  const [password, setPassword] = useState<boolean>(true);
  const [confirmPassword, setConfirmPassword] = useState<boolean>(true);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form className="w-448 h-600 rounded-16 bg-back px-51 relative">
        <Link href="/page/login" className="absolute top-2 left-2">
          <BiArrowBack className="text-titles text-20" />
        </Link>
        <h2 className=" text-titles text-40 text-center font-bold font-roboto mt-middle">
          Registro
        </h2>
        <div className="flex justify-center">
          <img src={logo} alt="logo_image" className="w-80 h-80 text-center" />
        </div>
        <Title />
        <Input type="text" placeholder="Nombre" />
        <div className="mt-12">
          <Input type="email" placeholder="Correo" />
        </div>
        <div className="flex relative mt-12 mb-2">
          <Input
            placeholder="Contraseña"
            type={password === true ? "password" : "text"}
            required
          />
          <button
            className="absolute top-0 right-0 "
            onClick={(e) => {
              e.preventDefault();
              setPassword(!password);
            }}
          >
            <BiLowVision className="text-titles text-20" />
          </button>
        </div>

        <div className="flex relative mt-12 mb-2">
          <Input
            placeholder="Confirmar contraseña"
            type={confirmPassword === true ? "password" : "text"}
            required
          />
          <button
            className="absolute top-0 right-0 "
            onClick={(e) => {
              e.preventDefault();
              setConfirmPassword(!confirmPassword);
            }}
          >
            <BiLowVision className="text-titles text-20" />
          </button>
        </div>
        <Button> Registrar </Button>
      </form>
    </div>
  );
}

export default Register;
