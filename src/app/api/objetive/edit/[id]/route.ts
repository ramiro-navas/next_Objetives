import { Objetive } from "@/interface/objetive";
import { prisma } from "@/libs/prisma";
import { cookies } from "next/headers";
import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";
const { verify } = require("jsonwebtoken");

export const PUT = async (request: any, { params }: any) => {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

  const data = await request.formData();
  const image = await data.get("image");
  const objetive = await prisma.objetive.findUnique({
    where: { id: parseInt(String(params.id)) },
  });
  const token = cookies().get("token");
  const user = await verify(token?.value, process.env.SECRET_VALUE);

  const objetiveInfo: Objetive = {
    title: await data.get("title"),
    amount: parseInt(String(await data.get("amount"))),
    progress: parseInt(String(await data.get("progress"))),
  };
  if (objetive && objetive.userId === user.id) {
    try {
      const objetiveUpdate = await prisma.objetive.update({
        where: {
          id: parseInt(String(params.id)),
        },
        data: {
          title: objetiveInfo.title,
          amount: objetiveInfo.amount,
          progress: objetiveInfo.progress,
        },
      });

      if (image) {
        const byte = await image.arrayBuffer();
        const buffer = Buffer.from(byte);

        const cloud = new Promise((resolve: any, reject: any) => {
          const upload_stream = cloudinary.uploader
            .upload_stream(
              { folder: "ahorros_objetives_images" },
              (err: any, result: any) => {
                if (err) reject(err);
                resolve(result);
              }
            )
            .end(buffer);
        }).then(async (cloudy) => {
          await prisma.objetive.update({
            where: {
              id: objetive.id,
            },
            data: {
              image: await cloudy?.secure_url,
            },
          });
        });
      }
      return NextResponse.json({
        status: "success",
        message: "Objetivo actualizado con exito",
        objetive: objetiveUpdate,
      });
    } catch (error) {
      return NextResponse.json({
        status: "success",
        message: "Ocurrio un error al actualizar el objetivo",
        error,
      });
    }
  } else {
    return NextResponse.json({
      status: "error",
      message: "El objetivo no existe",
    });
  }
};
