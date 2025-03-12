import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/database";
import cloudinaryDelete from "@/helper/cloudinaryDelete";
import isAdmin from "@/helper/isAdmin";

async function fileToBuffer(file: File): Promise<Buffer> {
  const arrayBuffer = await file.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

export async function PUT(req: NextRequest) {
  try {
    //if user is admin ==> he can update the data
    await isAdmin(req);

    const body = await req.json();
    const {
      id,
      image,
      imageMid,
      title,
      industry,
      seoDescription,
      keyWord,
      description,
      caseStudyFile,
    } = body;

    // if id is not present then throw exception
    if (!id) {
      throw new Error("Missing case study id to update...");
    }

    // find if the data is present in the database
    const existingData = await prisma.caseStudies.findUnique({ where: { id } });

    if (!existingData) {
      throw new Error("Case study not found to update....");
    }
    if (image) {
      if (existingData.image) {
        await cloudinaryDelete(existingData.image);
      }
    }
    if (imageMid) {
      if (existingData.imageMid) {
        await cloudinaryDelete(existingData.imageMid);
      }
    }
    if (caseStudyFile) {
      if (existingData.caseStudyFile) {
        await cloudinaryDelete(existingData.caseStudyFile);
      }
    }

    // update case study in database
    await prisma.caseStudies.update({
      where: { id },
      data: {
        title,
        industry,
        seoDescription,
        description,
        keyWord,
        image: image ? image : existingData.image,
        imageMid: imageMid ? imageMid : existingData.imageMid,
        caseStudyFile: caseStudyFile
          ? caseStudyFile
          : existingData.caseStudyFile,
      },
    });

    return NextResponse.json(
      { message: "Case Study Updated!!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("Error:-", error);
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
}
