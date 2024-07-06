import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/database";
import bcrypt from "bcryptjs";
import signToken from "@/helper/signToken";
export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        // Check user exists or not in db
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        // if user is not exists in db then throw error
        if (!existingUser) {
            return NextResponse.json(
                { error: "Invalid credentials, Please try again!!" },
                { status: 400 }
            );
        };

        // validate password
        const isPasswordValid = await bcrypt.compare(
            password,
            existingUser.password
        );

        // if password is not valid then throw error
        if (!isPasswordValid) {
            return NextResponse.json(
                { error: "Invalid credentials, Please try again!!" },
                { status: 400 }
            )
        };

        const token = signToken(existingUser.id, existingUser.role);

        const response = NextResponse.json(
            { message: "Welcome!!", token },
            { status: 200 }
        );


        const maxAge = 24 * 60 * 60;// 1 day in seconds


        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: maxAge,//sync with token expiration
            path: "/"
        });

        return response;
    } catch (error: any) {
        console.log("error - ", error);
        return NextResponse.json({ error: error?.message }, { status: 500 });
    }
}