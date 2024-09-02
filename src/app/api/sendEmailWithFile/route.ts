import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/transporter";

export async function POST(req: NextRequest) {
  try {
    const { name, email, position, experience, attachments } = await req.json();
    const mailOptions = {
      from: process.env.GMAIL_USER!,
      to: "hr@vionsys.com",
      subject: "Vionsys Website career application",
      html: `
           <h2>Vionsys Website Job application for ${position}</h2>
           <h3>Applicant Details:</h3>
            <h3><span style="font-weight: bold;">Name:</span> <span style="font-weight: lighter;">${name}</span></h3>
            <h3><span style="font-weight: bold;">Email:</span> <span style="font-weight: lighter;">${email}</span></h3>
            <h3><span style="font-weight: bold;">Experience:</span> <span style="font-weight: lighter;">${experience}</span></h3>
        `,
      attachments: attachments.map((file: any) => ({
        filename: file.filename,
        content: Buffer.from(file.content, "base64"),
      })),
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      message: "Email sent successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({
      message: "Something went wrong!!!",
      success: false,
    });
  }
}
