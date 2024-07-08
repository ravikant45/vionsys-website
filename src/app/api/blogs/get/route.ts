import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/database";
import { revalidatePath } from "next/cache";


export async function GET(req: NextRequest) {
    try {
        const data = await prisma.blog.findMany();

        if (!data) {
            throw new Error("Blog not found!!");
        }

        const response = NextResponse.json({ data }, { status: 200 });

        // Set cache control headers to ensure no caching
        response.headers.set(
            "Cache-Control",
            "no-store, no-cache, must-revalidate, proxy-revalidate"
        );
        response.headers.set("Pragma", "no-cache");
        response.headers.set("Expires", "0");
        response.headers.set("Surrogate-Control", "no-store");
        revalidatePath(req.url);
        return response;
    } catch (error) {
        console.log("Error is:", error);
        return NextResponse.json(
            { error: "Something went wrong, Please try again" },
            { status: 500 },
        )
    }
}