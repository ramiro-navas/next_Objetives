import { cookies } from "next/headers";
import { NextResponse } from "next/server"
const { verify } = require('jsonwebtoken');

export const GET = async (req: any , res: any)=>{
  try{
    const token = cookies().get("token");

    const data =  await verify(token?.value, process.env.SECRET_VALUE);
    return NextResponse.json({
      satus: "success",
      message: "Perfil obtenido con exito",
      user: {
        id: data.id,
        email: data.email,
        name: data.name,
      },
    });

  }catch(error: any){
  return NextResponse.json({
    status: "error",
    message: "Token invalido",
    error: error.message
  });
  }
}