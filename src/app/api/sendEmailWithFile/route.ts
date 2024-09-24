import { NextRequest, NextResponse } from "next/server";
import useSendEmailWithAttachments from "@/lib/useSendEmailWithAttachments";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const html = `
  <h2>Vionsys Website Job application for ${data.position}</h2>
  <h3>Applicant Details:</h3>
   <h3><span style="font-weight: bold;">Name:</span> <span style="font-weight: lighter;">${data.name}</span></h3>
   <h3><span style="font-weight: bold;">Email:</span> <span style="font-weight: lighter;">${data.email}</span></h3>
   <h3><span style="font-weight: bold;">Experience:</span> <span style="font-weight: lighter;">${data.experience}</span></h3>
`;
  try {
    await useSendEmailWithAttachments({
      data,
      sendTo: "hr@vionsys.com",
      subject: "Vionsys Website career application",
      html,
    });
    return NextResponse.json({
      message: "Email sent successfully",
      success: true,
    });
  } catch (error) {
    return Response.json({
      message: "Something went wrong!!!",
      success: false,
    });
  }
}
