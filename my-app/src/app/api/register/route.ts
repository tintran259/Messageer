import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
// others
import { STATUS_API } from "@/constants";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, name, password } = body;

    if (!email || !name || !password) {
      return new NextResponse('"Email, name, and password are required"', {
        status: STATUS_API.INTERNAL_SERVER_ERROR,
      });
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashPassword,
      },
    });

    return NextResponse.json(user, { status: STATUS_API.SUCCESS });
  } catch (error: any) {
    return new NextResponse(error?.message, {
      status: STATUS_API.INTERNAL_SERVER_ERROR,
    });
  }
}
