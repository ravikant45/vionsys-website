type Form1Data = {
  name: string;
  company: string;
  designation: string;
  email: string;
  phone: {
    countryCode: String;
    number: string;
  };
  interestedIn: string;
  message: string;
  userType: String;
};

export const StaffingEmployerTemplate = (data: Form1Data): string => `
    <h3>You have a new contact query from Vionsys website (IT STAFFING LANDING PAGE from ${data.userType})!!!</h3>
    <br/>
    <h2><span style="font-weight: bold;">Name:</span> <span style="font-weight: lighter;">${data.name}</span></h2>
    <h2><span style="font-weight: bold;">Company/Organisation:</span> <span style="font-weight: lighter;">${data.company}</span></h2>
    <h2><span style="font-weight: bold;">Designation:</span> <span style="font-weight: lighter;">${data.designation}</span></h2>
    <h2><span style="font-weight: bold;">Email:</span> <span style="font-weight: lighter;">${data.email}</span></h2>
    <h2><span style="font-weight: bold;">Contact Number:</span> <span style="font-weight: lighter;">${data.phone}</span></h2>
    <h2><span style="font-weight: bold;">Service Required:</span> <span style="font-weight: lighter;">${data?.interestedIn}</span></h2>
    <h2><span style="font-weight: bold;">Your Message:</span> <span style="font-weight: lighter;">${data.message}</span></h2>
`;
