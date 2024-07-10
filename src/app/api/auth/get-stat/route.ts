import isAdmin from "@/helper/isAdmin";
import { NextRequest } from "next/server";
import prisma from "../../../../../prisma/database";

export async function GET(req: NextRequest) {
  try {
    await isAdmin(req);
    const blogCount = await prisma.blog.count();
    const caseStudyCount = await prisma.caseStudies.count();

    return Response.json({
      message: "statistics fetched successfully",
      blogCount,
      caseStudyCount,
    });
  } catch (error) {
    console.log("error while getting stat - ", error);
    return Response.json(
      { error: "Error while getting stats" },
      {
        status: 500,
      }
    );
  }
}
