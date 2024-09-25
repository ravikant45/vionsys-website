// useSendEmail.ts
import { transporter } from "./transporter";

type bodyType = {
  sendTo: string;
  subject: string;
  html: string;
};

const useSendEmail = async ({ sendTo, subject, html }: bodyType) => {
  try {
    const mailOptions = {
      from: process.env.GMAIL_USER!,
      to: sendTo,
      subject: subject,
      html: html,
    };

    // Send mail
    await transporter.sendMail(mailOptions);
  } catch (error:any) {
    console.error("Error while sending email:", error.message);
    throw new Error("Error while sending the message");
  }
};

export default useSendEmail;
