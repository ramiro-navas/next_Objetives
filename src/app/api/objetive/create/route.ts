import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import path, { resolve } from "path";
import { prisma } from "@/libs/prisma";
import { cookies } from "next/headers";
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
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

  const data = await request.formData();
  const image = await data.get("image");
  const token = cookies()?.get("token");
  const user = await verify(token?.value, process.env.SECRET_VALUE);

  const objetive: Objetive = {
    title: await data.get("title"),
    user: {
      name: user.name,
      id: user.id,
      email: user.email,
    },
    userId: user.id,
    amount: await data.get("amount"),
    progress: 0,
  };

  try {
    if (objetive) {
      const objetiveCreate = await prisma.objetive.create({
        data: {
          title: objetive.title,
          amount: parseInt(String(await data.get("amount"))),
          //image: "",
          userId: user.id,
          progress: 0,
        },
      });

      if (image) {
        const byte = await image.arrayBuffer();
        const buffer = Buffer.from(byte);

        const cloud = new Promise((resolve, reject) => {
          const uploadStream = cloudinary.uploader
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
              id: objetiveCreate.id,
            },
            data: {
              image: await cloudy?.secure_url,
            },
          });
        });
        console.log(cloud);
      }

      return NextResponse.json({
        status: "success",
        message: "Objetivo creado",
        objetive: objetiveCreate,
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: "error",
      message: "Ocurrion un error al guardar el objetivo",
      error,
    });
  }
};
