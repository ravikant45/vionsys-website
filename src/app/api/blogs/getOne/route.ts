import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../../prisma/database';
import { revalidatePath } from 'next/cache';


export async function GET(req: NextRequest) {
    try {

        // Extract the id from the query parameters
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) {
            throw new Error("Please provide the id!!");
        }

        const data = await prisma.blog.findUnique({
            where: { id }
        });

        if (!data) {
            return NextResponse.json(
                { error: "Blog not found!!" },
                { status: 404 }
            );
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
            { status: 500 }
        );
    }
}
