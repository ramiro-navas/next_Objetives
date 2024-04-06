"use client";
import { Input, Button } from "@/components/ui";
import Link from "next/link";
import { useState } from "react";
import { BiLowVision } from "react-icons/bi";
import { logo, google } from "@/helpers/helpers";
import { Credential } from "@/interface/login";
import { Title } from "@/components/ui/Title";

function Login() {
  const [password, setPassword] = useState<boolean>(true);
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

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form className="w-448 h-600 rounded-16 bg-back px-51">
        <h2 className=" text-titles text-40 text-center font-bold font-roboto mt-43 ">
          Inicio de sesíon
        </h2>
        <div className="flex justify-center">
          <img src={logo} alt="logo_image" className="w-80 h-80 text-center" />
        </div>
        <Title />
        <Input
          placeholder="Correo"
          type="email"
          name="email"
          required
          onChange={handleChange}
        />
        <div className="flex relative mt-12 mb-2">
          <Input
            placeholder="Contraseña"
            type={password === true ? "password" : "text"}
            name="password"
            required
            onChange={handleChange}
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
        <div className="flex justify-between items-center mb-6 ">
          <div className="flex">
            <h6 className="font-roboto text-10">¿No tienes cuenta?</h6>
            <Link
              href="/page/register"
              className=" text-titles font-roboto text-10"
            >
              Crea una.
            </Link>
          </div>
          <Link href="" className="border-b border-b-white text-12">
            Olvidé mi contraseña
          </Link>
        </div>
        <Button onClick={handleSubmit}>Iniciar sesíon</Button>
        <div className="grid grid-cols-or items-center mb-8">
          <hr className="h-px border-none rounded-md bg-gradient-to-r from-start via-middle to-end" />
          <h3 className="font-roboto text-12 text-center">O</h3>
          <hr className="h-px border-none rounded-md bg-gradient-to-r from-start via-middle to-end" />
        </div>
        <Button onClick={getProfile}>
          <img src={google} alt="google_logo" className="w-20 h-20" />
        </Button>
      </form>
    </div>
  );
}

export default Login;
