import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/database";
import bcrypt from "bcryptjs";
import isAdmin from "@/helper/isAdmin";

export async function POST(req: NextRequest) {
    try {
        await isAdmin(req);
        const { email, password, role } = await req.json();

        // Validate the email and password
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        // If user already exists then throw error
        if (existingUser) {
            return NextResponse.json(
                { error: "User already exists, Please login!!!" },
                { status: 400 }
            )
        }

        //Hash the password (encrypt the password!!)
        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                role: role || "admin",
            },
        });


        return NextResponse.json(
            { message: "User Created Successfully, Please login" },
            { status: 201 }
        );
    } catch (error: any) {
        console.log("Error-", error);
        return NextResponse.json({ error: error?.message }, { status: 500 })
    }
}  