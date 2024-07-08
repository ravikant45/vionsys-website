import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/database";
import cloudinaryDelete from "@/helper/cloudinaryDelete";
import { message } from "antd";
import isAdmin from "@/helper/isAdmin";

export async function DELETE(req: NextRequest) {
    try {

        // if user is admin then and then only he can delete the case study data
        await isAdmin(req);

        // Extract the id from the query parameters
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) {
            throw new Error("Please provide the id!!");
        }

        const caseStudy = await prisma.caseStudies.findUnique({
            where: { id }
        });

        if (!caseStudy) {
            throw new Error('Case Study not found to delete..');
        }
        // delete image from cloudinary
        await cloudinaryDelete(caseStudy.image);

        const deletedCaseStudy = await prisma.caseStudies.delete({
            where: { id: caseStudy.id }
        });

        if (!deletedCaseStudy) {
            throw new Error('Something went wrong!!!');
        }

        return NextResponse.json(
            { message: "Case Study Deleted!!!" },
            { status: 200 }
        )

    } catch (error: any) {
        console.log("Error:-", error);
        return NextResponse.json(
            { error: error?.message },
            { status: 500 }
        );
    }
}