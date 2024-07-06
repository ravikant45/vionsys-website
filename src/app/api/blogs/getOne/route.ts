import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../../prisma/database';


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

        return NextResponse.json(
            { data },
            { status: 200 }
        );
    } catch (error) {
        console.log("Error is:", error);
        return NextResponse.json(
            { error: "Something went wrong, Please try again" },
            { status: 500 }
        );
    }
}
