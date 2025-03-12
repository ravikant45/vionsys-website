import cloudinaryUpload from "@/helper/cloudinaryUpload";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/database";
import isAdmin from "@/helper/isAdmin";
import cloudinaryDelete from "@/helper/cloudinaryDelete";

export async function POST(req: NextRequest) {
  await isAdmin(req);
  const body = await req.json();
  const {
    image,
    imageMid,
    title,
    industry,
    seoDescription,
    keyWord,
    description,
    caseStudyFile,
  } = body;
  try {
    console.log(body);

    //save case studies to the database
    await prisma.caseStudies.create({
      data: {
        title,
        industry,
        seoDescription,
        keyWord,
        description,
        caseStudyFile,
        image,
        imageMid,
      },
    });

    return NextResponse.json(
      { message: "New Case Study added successfully!!" },
      { status: 201 }
    );
  } catch (error: any) {
    await cloudinaryDelete(image);
    await cloudinaryDelete(imageMid);
    await cloudinaryDelete(caseStudyFile);
    console.log("Error:-", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
