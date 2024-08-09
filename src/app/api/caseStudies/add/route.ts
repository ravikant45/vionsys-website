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
    await isAdmin(req);
    const data = await req.formData();

    const title = data.get("title") as string;
    const description = data.get("description") as string;
    const keyWord = data.get("keyWord") as string;
    const seoDescription = data.get("seoDescription") as string;
    const image = data.get("file") as unknown as File;

    // buffered image
    const imageBuffer = await fileToBuffer(image);

    // upload image to the cloudinary
    const url = await cloudinaryUpload(imageBuffer, "vionsysCaseStudies");
    const cloudinary_url = url?.secure_url;

    //save case studies to the database
    await prisma.caseStudies.create({
      data: {
        title,
        seoDescription,
        keyWord,
        description,
        image: cloudinary_url,
      },
    });

    return NextResponse.json(
      { message: "New Case Study added!!" },
      { status: 201 }
    );
  } catch (error: any) {
    console.log("Error:-", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
