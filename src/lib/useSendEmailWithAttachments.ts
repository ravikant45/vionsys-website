import { NextResponse } from "next/server";
import { transporter } from "./transporter";

type BodyType = {
  data: any;
  sendTo: string;
  subject: string;
  html: string;
};

const useSendEmailWithAttachments = async ({ data, sendTo, subject, html }: BodyType) => {
  try {
    
    const attachments = data.cv?.fileList?.map((file: any) => ({
      filename: file.name,
      content: file.originFileObj, 
    })) || [];

    const mailOptions = {
      from: process.env.GMAIL_USER!,
      to: sendTo,
      subject: subject,
      html,
      attachments,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info);
  } catch (error: any) {
    console.error("Error sending email:", error); 
    throw new Error("Error sending email: " + error.message);
  }
};

export default useSendEmailWithAttachments;
