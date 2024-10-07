import { NextRequest, NextResponse } from "next/server";
import useSendEmailWithAttachments from "@/lib/useSendEmailWithAttachments";

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data);
  const html = data.template;
  try {
    await useSendEmailWithAttachments({
      data,
      sendTo: "info@vionsys.com",
      subject: "Vionsys Website career application",
      html:html,
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
