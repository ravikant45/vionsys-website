import { NextRequest, NextResponse } from "next/server";
import useSendEmailWithAttachments from "@/lib/useSendEmailWithAttachments";

export async function POST(req: NextRequest) {
  const data = await req.json(); // Ensure correct parsing
  const html = data.template;
  try {
    await useSendEmailWithAttachments({
      data,
      sendTo: data.sendTo || "info@vionsys.com",
      subject: "Vionsys Website career application",
      html,
    });
    return NextResponse.json({
      message: "Email sent successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      message: "Something went wrong!!!",
      success: false,
    });
  }
}
