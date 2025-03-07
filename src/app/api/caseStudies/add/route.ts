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
    const industry = data.get("industry") as string;
    const seoDescription = data.get("seoDescription") as string;
    const imageFile = data.get("image") as unknown as File;
    const imageMidFile = data.get("imageMid") as unknown as File;

    if (!imageFile || !imageMidFile) {
      return NextResponse.json(
        { error: "Both images are required." },
        { status: 400 }
      );
    }

    // buffered image
    const imageBuffer = await fileToBuffer(imageFile);
    const imageMidBuffer = await fileToBuffer(imageMidFile);

    // upload image to the cloudinary
    const url = await cloudinaryUpload(imageBuffer, "vionsysCaseStudies");
    const urlMid = await cloudinaryUpload(imageMidBuffer, "vionsysCaseStudies");
    const cloudinary_url = url?.secure_url;
    const cloudinary_urlMid = urlMid?.secure_url;

    if (!cloudinary_url || !cloudinary_urlMid) {
      return NextResponse.json(
        { error: "Image upload failed." },
        { status: 500 }
      );
    }

    //save case studies to the database
    await prisma.caseStudies.create({
      data: {
        title,
        industry,
        seoDescription,
        keyWord,
        description,
        image: cloudinary_url,
        imageMid: cloudinary_urlMid,
      },
    });

    return NextResponse.json(
      { message: "New Case Study added successfully!!" },
      { status: 201 }
    );
  } catch (error: any) {
    console.log("Error:-", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
