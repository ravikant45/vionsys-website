type Form1Data = {
  name: string;
  company: string;
  designation: string;
  email: string;
  countryCode: string;
  phoneNo: string;
  interestedIn: string;
  message: string;
  userType: string;
};

export const StaffingEmployerTemplate = (data: Form1Data): string => `
<div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 8px; max-width: 600px; margin: auto;">
    <h1 style="color: #e57e2c; font-size: 24px; text-align: center; font-weight: bold;">
        New Contact Query from ${data.userType}
    </h1>
    <p style="font-size: 18px; text-align: center; color: #555;">
        You have received a new contact query from the IT Staffing Landing Page.
    </p>

    <div style="background-color: white; padding: 20px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #215cbc; font-size: 20px;">Query Details:</h2>

        <table style="width: 100%; font-size: 16px; color: #333; margin-top: 10px;">
            <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold;">Name:</td>
                <td style="padding: 10px 0;">${data.name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold;">Company/Organisation:</td>
                <td style="padding: 10px 0;">${data.company}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold;">Designation:</td>
                <td style="padding: 10px 0;">${data.designation}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold;">Email:</td>
                <td style="padding: 10px 0;">${data.email}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold;">Contact Number:</td>
                <td style="padding: 10px 0;">${data.countryCode} ${data.phoneNo}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold;">Service Required:</td>
                <td style="padding: 10px 0;">${data?.interestedIn}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold;">Message:</td>
                <td style="padding: 10px 0;">${data.message}</td>
            </tr>
        </table>

        <div style="margin-top: 20px; text-align: center;">
            <a href="mailto:${data.email}" style="background-color: #e57e2c; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none;">Contact ${data.name}</a>
        </div>
    </div>

    <p style="text-align: center; font-size: 14px; color: #999; margin-top: 20px;">
        This email was sent from the Vionsys IT Staffing Page. For more information, visit our website.
    </p>
</div>
`;