import { NextResponse } from "next/server";
import { transporter } from "./transporter";

type bodyType={
    data:any,sendTo:string,subject:string,html:string
}

const useSendEmailWithAttachments = async ({data,sendTo,subject,html}:bodyType) => {
    try {
        const mailOptions = {
          from: process.env.GMAIL_USER!,
          to: sendTo,
          subject: subject,
          html
         ,
          attachments: data.attachments.map((file: any) => ({
            filename: file.filename,
            content: Buffer.from(file.content, "base64"),
          })),
        };
        await transporter.sendMail(mailOptions);
       
      } catch (error) {
        throw new Error("Error sending email:");
       
      }
}

export default useSendEmailWithAttachments
