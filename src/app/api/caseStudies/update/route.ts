import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/database";
import cloudinaryDelete from "@/helper/cloudinaryDelete";
import cloudinaryUpload from "@/helper/cloudinaryUpload";
import { message } from "antd";
import isAdmin from "@/helper/isAdmin";

async function fileToBuffer(file: File): Promise<Buffer> {
  const arrayBuffer = await file.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

export async function PUT(req: NextRequest) {
  try {
    //if user is admin ==> he can update the data
    await isAdmin(req);

    const data = await req.formData();

    const id = data.get("id") as string;
    const title = data.get("title") as string;
    const keyWord = data.get("keyWord") as string;
    const industry = data.get("industry") as string;
    const description = data.get("description") as string;
    const seoDescription = data.get("seoDescription") as string;
    const image = data.get("image") as unknown as File;
    const imageMid = data.get("imageMid") as unknown as File;

    // if id is not present then throw exception
    if (!id) {
      throw new Error("Missing case study id to update...");
    }

    // find if the data is present in the database
    const existingData = await prisma.caseStudies.findUnique({ where: { id } });

    if (!existingData) {
      throw new Error("Case study not found to update....");
    }

    let caseStudyImage = existingData.image;
    // Only delete and update image from cloudinary if new image is provided
    if (image && image?.size > 0) {
      if (existingData.image) {
        await cloudinaryDelete(existingData.image);
      }

      const buffer = await fileToBuffer(image);
      const url = await cloudinaryUpload(buffer, "vionsysCaseStudies");
      caseStudyImage = url?.secure_url;
    }

    let caseStudyImageMid = existingData.image;
    if (imageMid && imageMid?.size > 0) {
      if (existingData.imageMid) {
        await cloudinaryDelete(existingData.imageMid);
      }

      const bufferMid = await fileToBuffer(imageMid);
      const urlMid = await cloudinaryUpload(bufferMid, "vionsysCaseStudies");
      caseStudyImageMid = urlMid?.secure_url;
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
        image: caseStudyImage,
        imageMid: caseStudyImageMid,
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
