import { transporter } from "./transporter";

type mailType = {
  fullName: string;
  countryCode: string;
  mobileNumber: string;
  email: string;
};

const useSendEmailCaseStudy = async ({
  fullName,
  countryCode,
  mobileNumber,
  email,
}: mailType) => {
  try {
    const mailOptions = {
      from: process.env.GMAIL_USER!,
      to: `info@vionsys.com, ${process.env.EMAIL_RECEIVER}`,
      subject: `Case Study Downloaded by ${fullName}`,
      html: `
              <div style="font-family: 'Open Sans', sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #f9f9f9;">
              <h2 style="text-align: center; color: #333; font-size: 24px; font-weight: bold; margin-bottom: 20px;">Contact Details</h2>
              <div style="padding: 10px 20px; background-color: #fff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                <p style="font-size: 18px; color: #333; margin: 10px 0;">
                  <strong style="color: #e74c3c;">Full Name:</strong> ${fullName}
                </p>
                <p style="font-size: 18px; color: #333; margin: 10px 0;">
                  <strong style="color: #e74c3c;">Email:</strong> ${email}
                </p>
                <p style="font-size: 18px; color: #333; margin: 10px 0;">
                  <strong style="color: #e74c3c;">Mobile Number:</strong>${mobileNumber}
                </p>
              </div>
            </div>
              `,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error("error while sending mail");
  }
};

export default useSendEmailCaseStudy;
