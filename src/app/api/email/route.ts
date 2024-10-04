// email.ts (API Route)
import useSendEmail from "@/lib/useSendEmail";

export async function POST(req: Request) {
  const data = await req.json();
  console.log(data);
  const html = data.template;

  try {
    await useSendEmail({
      sendTo: "info@vionsys.com",
      subject: "Vionsys Website Contact Form",
      html: html,
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
