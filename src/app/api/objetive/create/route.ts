import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import path, { resolve } from "path";
import { prisma } from "@/libs/prisma";
import { cookies } from "next/headers";
import { title } from "process";
const { verify } = require("jsonwebtoken");

interface User {
  name: string;
  id: number;
  email: string;
}
interface Objetive {
  title: string;
  user: User;
  amount: number;
  image?: string;
  userId: number;
  progress: number;
}

export const POST = async (request: any) => {
  const data = await request.json();
  const token = cookies()?.get("token");
  const user = await verify(token?.value, process.env.SECRET_VALUE);

  try {
    if (user && data.title && data.amount) {
      const objetiveCreate = await prisma.objetive.create({
        data: {
          title: data.title,
          amount: parseInt(String(await data.amount)), //* el amount se recibe como cadena(string)
          userId: user.id,
          progress: 0,
        },
      });

      return NextResponse.json({
        status: "success",
        message: "Objetivo creado con exito",
        objetive: objetiveCreate,
      });
    } else {
      return NextResponse.json({
        status: "error",
        message: "Faltan datos",
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: "Ocurio un error al guardar el objetivo",
      error,
    });
  }
};
