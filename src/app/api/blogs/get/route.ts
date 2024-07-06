import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/database";


export async function GET(req: NextRequest) {
    try {
        const data = await prisma.blog.findMany();

        if (!data) {
            throw new Error("Blog not found!!");
        }

        return NextResponse.json(
            { data },
            { status: 200 }
        )
    } catch (error) {
        console.log("Error is:", error);
        return NextResponse.json(
            { error: "Something went wrong, Please try again" },
            { status: 500 },
        )
    }
}