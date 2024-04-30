import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/transporter";

export async function POST(req: NextRequest) {
    try {
        const { name, email, position, experience, attachments } = await req.json();
        const mailOptions = {
            from: process.env.GMAIL_USER!,
            to: "Ravikantwaghmare@vionsys.com",
            subject: 'Vionsys Website Contact Form',
            html: `
           <h2>Vionsys Website Job application for ${position}</h2>
           <h4>Applicant Details:</h4>
           <br/>
            <h2><span style="font-weight: bold;">Name:</span> <span style="font-weight: lighter;">${name}</span></h2>
            <h2><span style="font-weight: bold;">Email:</span> <span style="font-weight: lighter;">${email}</span></h2>
            <h2><span style="font-weight: bold;">Experience:</span> <span style="font-weight: lighter;">${experience}</span></h2>
        `,
            attachments: attachments.map((file: any) => ({
                filename: file.filename,
                content: Buffer.from(file.content, 'base64'),
            }))
        };
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Email sent successfully", success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return Response.json({ message: "Something went wrong!!!", success: false })
    }
}