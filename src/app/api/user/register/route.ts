import { NextResponse } from "next/server";
import User from "@/interface/user";
import { prisma } from "@/libs/prisma";
import { cookies } from "next/headers";
const jwt = require("jsonwebtoken");

export const POST = async (request: any, { params }: any) => {
  const user: User = await request.json();
  

  try {
    const exist = await prisma.user.findFirst({
      //*verificar si existe el usuario
      where: {
        email: user.email,
      },
    });

    if (exist) {
      return NextResponse.json({
        status: "error",
        mesagge: "El usuario ya existe",
      });
    } else {
      const userSaved = await prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          password: user.password,
        },
      });

      const token = jwt.sign(
        {
          email: user.email,
          name: user.name,
          id: user.id,
          exp: Math.floor(Date.now() / 1000 + 60 * 60 * 24 * 30),
        },
        process.env.SECRET_VALUE
      );

      cookies().set({
        name: "token",
        value: token,
        httpOnly: true,
        path: "/",
        maxAge: 1000 * 60 * 60 * 24 * 30,
        secure: process.env.NODE_ENV === "production",
      });
      return NextResponse.json({
        status: "success",
        mesagge: "Se ragistró con exito al usuario",
        user: {
          id: userSaved.id,
          name: userSaved.name,
          email: userSaved.email,
        },
        token: "",
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      status: "error",
      message: "Error al registrar el usuario",
      error: error.message,
    });
  }
};
