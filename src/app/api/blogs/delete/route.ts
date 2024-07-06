import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/database";
import cloudinaryDelete from "@/helper/cloudinaryDelete";
import isAdmin from "@/helper/isAdmin";

export async function DELETE(req: NextRequest) {
    try {

        // if user is admin --> he can perform this operation
        await isAdmin(req);


        // Extract the id from the query parameters
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) {
            throw new Error("Please provide the id!!");
        }

        const blog = await prisma.blog.findUnique({ where: { id } });

        if (!blog) {
            throw new Error("Blog not found to delete..");
        }

        await cloudinaryDelete(blog.image);

        const deletedBlog = await prisma.blog.delete({ where: { id: blog.id } });

        if (!deletedBlog) {
            throw new Error("Something went wrong!!!");
        }

        return NextResponse.json(
            { message: "Blog Deleted!!" },
            { status: 200 }
        )


    } catch (error) {
        // Handle errors
        console.error("Error deleting blog:", error);
        return Response.json(
            { error: "Failed to delete blog, please try again later." },
            { status: 500 }
        );
    }
}