import { prisma } from "@/libs/prisma";
const { verify } = require("jsonwebtoken");
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const DELETE = async (url: any, { params }: any) => {
  try {
    const token = cookies().get("token");
    const user = await verify(token?.value, process.env.SECRET_VALUE);
    const find = await prisma.objetive.findUnique({
      where: { id: parseInt(String(params.id)) }, //*params.id viene en string. por lo que se debe pasar a int(tipo del dato id en la base de datos)
    });

    if (find && find.userId === user.id) {
      const objetiveDelete = await prisma.objetive.delete({
        where: { id: parseInt(String(params.id)) },
      });
      console.log(objetiveDelete);
      return NextResponse.json({
        status: "success",
        message: "Objetivo eliminado con exito",
        data: objetiveDelete,
      });
    } else {
      return NextResponse.json({
        status: "error",
        message: "No se encontró el Objetivo a Eliminar",
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: "success",
      message: "Ocurrio un error al eliminar el objetivo",
      error,
    });
  }
};
