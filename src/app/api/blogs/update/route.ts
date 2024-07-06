import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/database";
import cloudinaryDelete from "@/helper/cloudinaryDelete";
import cloudinaryUpload from "@/helper/cloudinaryUpload";

async function fileToBuffer(file: File): Promise<Buffer> {
    const arrayBuffer = await file.arrayBuffer();
    return Buffer.from(arrayBuffer);
}

export async function PUT(req: NextRequest) {
    try {
        const data = await req.formData();
        const id = data.get("id") as string;
        const title = data.get("title") as string;
        const description = data.get("description") as string;
        const image = data.get("file") as unknown as File;

        // If id is not present then throw exception
        if (!id) {
            throw new Error("Missing blog ID to update..");
        }

        //    find existing blog data
        const existingBlog = await prisma.blog.findUnique({ where: { id } });

        if (!existingBlog) {
            throw new Error("Blog not found to update..");
        }

        let blogImageUrl = existingBlog.image;

        // Only delete and update the image on cloudinary if the new image is provided
        if (image && image.size > 0) {
            if (existingBlog.image) {
                await cloudinaryDelete(existingBlog.image);
            }

            const buffer = await fileToBuffer(image);
            // upload the image on the cloudinary
            const url = await cloudinaryUpload(buffer, "vionsysBlogsImages");
            blogImageUrl = url?.secure_url;
        }

        // update the blog in database
        await prisma.blog.update({
            where: { id },
            data: {
                title,
                description,
                image: blogImageUrl,
            },
        });

        return NextResponse.json(
            { message: "Blog updated!!" },
            { status: 200 }
        );
    } catch (error: any) {
        console.log("Error updating blog:", error);
        return NextResponse.json(
            { error: error.message || "Server error in updating blog" },
            { status: 500 }
        )
    }
}