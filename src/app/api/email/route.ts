import { transporter } from "@/lib/transporter";

export async function POST(req: Request) {
    try {
        const { name, number, email, message } = await req.json();
        // Setup email data
        const mailOptions = {
            from: process.env.GMAIL_USER!,
            to: "info@vionsys.com",
            subject: 'Vionsys Website Contact Form',
            html: `
            <h3>You have a new contact query from vionsys website!!!</h3>
            <br/>
            <h2><span style="font-weight: bold;">Name:</span> <span style="font-weight: lighter;">${name}</span></h2>
            <h2><span style="font-weight: bold;">Email:</span> <span style="font-weight: lighter;">${email}</span></h2>
            <h2><span style="font-weight: bold;">Contact Number:</span> <span style="font-weight: lighter;">${number}</span></h2>
            <h2><span style="font-weight: bold;">Message:</span> <span style="font-weight: lighter;">${message}</span></h2>
            
            `,
        };

        // Send mail
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);

        return Response.json({ message: "Email sent successfully", success: true })
    } catch (error: any) {
        console.error('Error sending email:', error);
        return Response.json({ message: "Something went wrong!!!", success: false })
    }
}
