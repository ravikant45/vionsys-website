// email.ts (API Route)
import useSendEmailCaseStudy from "@/lib/useSendEmailCaseStudy";

export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json();
    const { fullName, countryCode, mobileNumber, email } = body;

    if (!fullName || !email) {
      return new Response(
        JSON.stringify({ error: "Full Name and Email are required" }),
        { status: 400 }
      );
    }

    // function to send mail to user
    await useSendEmailCaseStudy({
      fullName,
      countryCode,
      mobileNumber,
      email,
    });

    return Response.json(
      { message: "Request submitted successfully" },
      { status: 202 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json(
      { error: "error while Request submitting" },
      { status: 500 }
    );
  }
}
