import isAdmin from "@/helper/isAdmin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        // await isAdmin(req);
        const response = NextResponse.json(
            { message: "Logged Out Successfully!!" },
            { status: 200 }
        );

        // clear the cookies
        response.cookies.set("token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 0,
            path: "/"
        })

        return response;
    } catch (error: any) {
        console.log("error - ", error);
        return NextResponse.json({ error: error?.message }, { status: 500 });
    }
}