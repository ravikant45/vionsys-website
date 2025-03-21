type Form3Data = {
    name: string;
    email: string;
    number: string;
    message: string;
  };
  
  export const SoftwareDevelopmentTemplate = (data: Form3Data,title:string): string => `
  <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; margin: auto; ">
      <h1 style="color: #215cbc; font-size: 24px; text-align: center; font-weight: bold;">
          New Inquiry from Vionsys ${title}
      </h1>
      <p style="font-size: 16px; text-align: center; color: #555;">
          You have received a new message from the contact form.
      </p>
  
      <div style="background-color: white; padding: 20px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #e57e2c; font-size: 20px; margin-bottom: 10px;">Message Details:</h2>
  
          <table style="width: 100%; font-size: 16px; color: #333; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 10px; font-weight: bold;">Full Name:</td>
                  <td style="padding: 10px;">${data.name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 10px; font-weight: bold;">Email Address:</td>
                  <td style="padding: 10px;"><a href="mailto:${data.email}" style="color: #215cbc; text-decoration: none;">${data.email}</a></td>
              </tr>
              ${data.number ? `
              <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 10px; font-weight: bold;">Phone Number:</td>
                  <td style="padding: 10px;">${data.number}</td>
              </tr>` : ""}
              
              <tr>
                  <td style="padding: 10px; font-weight: bold; vertical-align: top;">Message:</td>
                  <td style="padding: 10px;">${data.message}</td>
              </tr>
          </table>
  
          <div style="margin-top: 20px; text-align: center;">
              <a href="mailto:${data.email}" style="background-color: #e57e2c; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 16px; font-weight: bold;">Reply to ${data.name}</a>
          </div>
      </div>
  
      <p style="text-align: center; font-size: 14px; color: #777; margin-top: 20px;">
          This email was sent from the Vionsys IT Solutions India Pvt. Ltd. For more information, visit our <a href="https://www.vionsys.com" style="color: #215cbc; text-decoration: none;">website</a>.
      </p>
  </div>
  `;
  