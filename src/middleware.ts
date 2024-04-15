import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
export const middleware = async (request: any) => {
  const token = request.cookies.get("token");

  if (request.nextUrl.pathname.includes("/page/feed")) {
    if (token === undefined) {
      return NextResponse.redirect(new URL("/page/login", request.url));
    }
    try {
      const ob = await jwtVerify(token.value, "S3cR370D3274d0");
      console.log(ob)
    } catch (error) {
      console.log(error)
      //return NextResponse.redirect(new URL("/page/login", request.url));
    }
  }
  return NextResponse.next();
};
