import cloudinaryUpload from "@/helper/cloudinaryUpload";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/database";
import isAdmin from "@/helper/isAdmin";
async function fileToBuffer(file: File): Promise<Buffer> {
  const arrayBuffer = await file.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

export async function POST(req: NextRequest) {
  try {
    // if user is admin --> he can perform this operation
    await isAdmin(req);

    const data = await req.formData();
    const title = data.get("title") as string;
    const keyWord = data.get("keyWord") as string;
    const author = data.get("author") as string;
    const description = data.get("description") as string;
    const image = data.get("file") as unknown as File;
    const postDate = data.get("currentDate") as string;
    const seoDescription = data.get("seoDescription") as string;
    const blogImageBuffer = await fileToBuffer(image);
    console.log(author);

    // upload the image on the cloudinary
    const url = await cloudinaryUpload(blogImageBuffer, "vionsysBlogsImages");
    const cloudinary_url = url?.secure_url;

    // save the blog details in the database
    await prisma.blog.create({
      data: {
        title,
        keyWord,
        author,
        description,
        seoDescription,
        postDate,
        image: cloudinary_url,
      },
    });

    return NextResponse.json(
      {
        message: "New Blog added!!",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error adding blog:", error);
    return NextResponse.json(
      { error: "Failed to add blog, Please try again later!!" },
      { status: 500 }
    );
  }
}
