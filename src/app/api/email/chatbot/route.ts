import useSendEmail from "@/lib/useSendEmail";
import { chatBotTemplate } from "@/utils/chatBotTemplate";
export async function POST(req: Request) {
  const data = await req.json();

  try {
    await useSendEmail({
      sendTo: process.env.BOT_TO_SEND_EMAIL as string,
      subject: "vionsys chatbot query",
      html: chatBotTemplate(data),
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully", success: true }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    console.error("Error sending email:", error.message);
    return new Response(
      JSON.stringify({ message: "Something went wrong!!!", success: false }),
      {
        status: 500,
      }
    );
  }
}
