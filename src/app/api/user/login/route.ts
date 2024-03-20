import { NextResponse } from "next/server";
import User from "@/interface/user";
import { prisma } from "@/libs/prisma";
const jwt = require("jsonwebtoken");
import { cookies } from "next/headers";
const cookie = require("cookie")

export const POST = async (req: any, res: any) => {
  const user: User = await req.json();

  try {
    const exist = await prisma.user.findFirst({
      where: {
        email: user.email,
        password: user.password,
      },
    });
    if (exist) {
      const token = jwt.sign(
        {
          email: exist.email,
          name: exist.name,
          id: exist.id,
          exp: Math.floor(Date.now() / 1000 + 60 * 60 * 24 * 30),
        },
        process.env.SECRET_VALUE
      );

      const serialized = cookie.serialize('token', token,{
        value: token,
        sameSite: 'strict',
        httpOnly: true,
        path: "/",
        maxAge: 1000 * 60 * 60 * 24 * 30,
        secure: process.env.NODE_ENV === "production",
      })
     

      cookies().set({
        name: "token",
        value: token,
        httpOnly: true,
        path: "/",
        maxAge: 1000 * 60 * 60 * 24 * 30,
        secure: process.env.NODE_ENV === "production",
      })

      return NextResponse.json({
        status: "success",
        message: "Logeado con exito",
        user: {
          id: exist.id,
          name: exist.name,
          email: exist.email,
        },
      });
    }
    
    return NextResponse.json({
      status: "error",
      message: "Correo o contraseña incorrecto",
    });
  } catch (error: any) {
    return NextResponse.json({
      status: "error",
      message: "Ocurrio un error al iniciar sesíon",
      error: error.message,
    });
  }
};
