import { transporter } from "./transporter";

type BodyType = {
  data: any;
  sendTo: string;
  subject: string;
  html: string;
};

const useSendEmailWithAttachments = async ({ data, sendTo, subject, html }: BodyType) => {
  try {
    const attachments = data.attachments?.map((file: any) => ({
      filename: file.filename,
      content: file.content.split(",")[1], // Remove base64 prefix
      encoding: "base64",
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
    throw error;
  }
};

export default useSendEmailWithAttachments;
