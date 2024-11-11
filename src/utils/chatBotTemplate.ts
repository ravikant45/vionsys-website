type chatBotTemplateType = {
  Name: {
    first: string;
    last: string;
  };
  Email: string;
  Number: string;
  Service?: string;
  Question?: string;
};

export const chatBotTemplate = (data: chatBotTemplateType): string => `
    <div style="
      font-family: Arial, sans-serif;
      padding: 20px;
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 8px;
      max-width: 600px;
      margin: auto;
    ">
        <h1 style="color: #e57e2c; font-size: 24px; text-align: center; font-weight: bold;">
            New ChatBot Request from Vionsys
        </h1>
        <p style="font-size: 18px; text-align: center; color: #555;">
            You have received a new chatbot inquiry from Vionsys .
        </p>
    
        <div style="
          background-color: white;
          padding: 20px;
          border-radius: 6px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        ">
            <h2 style="color: #215cbc; font-size: 20px;">Request Details:</h2>
    
            <table style="width: 100%; font-size: 16px; color: #333; margin-top: 10px;">
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 10px 0; font-weight: bold;">Full Name:</td>
                    <td style="padding: 10px 0;">
                      ${data.Name.first || ""} ${data.Name.last || ""}
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 10px 0; font-weight: bold;">Email Address:</td>
                    <td style="padding: 10px 0;">
                      ${data.Email || "NA"}
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 10px 0; font-weight: bold;">Contact Number:</td>
                    <td style="padding: 10px 0;">
                      ${data.Number || "NA"}
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 10px 0; font-weight: bold;">Service Required:</td>
                    <td style="padding: 10px 0;">
                      ${data.Service || "None"}
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 10px 0; font-weight: bold;">Question:</td>
                    <td style="padding: 10px 0;">
                      ${data.Question || "None"}
                    </td>
                </tr>
            </table>
    
            <div style="margin-top: 20px; text-align: center;">
                <a href="mailto:${data.Email || "NA"}" style="
                  background-color: #e57e2c;
                  color: white;
                  padding: 15px 25px;
                  border-radius: 6px;
                  text-decoration: none;
                ">
                  Reply with Email
                </a>
            </div>
        </div>
    
        <p style="text-align: center; font-size: 14px; color: #999; margin-top: 20px;">
            This email was sent from the Vionsys ChatBot. For more information, visit our website.
        </p>
    </div>
  `;
