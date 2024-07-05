import cloudinaryUpload from "@/helper/cloudinaryUpload";
import { message } from "antd";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/database";

async function fileToBuffer(file: File): Promise<Buffer> {
    const arrayBuffer = await file.arrayBuffer();
    return Buffer.from(arrayBuffer);
}

export async function POST(req: NextRequest) {
    try {
        const data = await req.formData();
        const title = data.get("title") as string;
        const description = data.get("description") as string;
        const image = data.get("file") as unknown as File;
        const postDate = data.get("currentDate") as string;
        const blogImageBuffer = await fileToBuffer(image);

        // upload the image on the cloudinary
        const url = await cloudinaryUpload(blogImageBuffer, "vionsysBlogsImages");
        const cloudinary_url = url?.secure_url;

        // save the blog details in the database
        await prisma.blog.create({
            data: {
                title,
                description,
                postDate,
                image: cloudinary_url,
            }
        })

        return NextResponse.json({
            message: "New Blog added!!"
        }, { status: 201 })
    } catch (error) {
        console.log("Error adding blog:", error);
        return NextResponse.json(
            { error: "Failed to add blog, Please try again later!!" },
            { status: 500 }
        )
    }
}