type Form3Data = {
  name: string;
  email: string;
  phone: {
    countryCode: string;
    number: string;
  };
  message: string;
};

export const StaffingLandingPageTemplate = (data: Form3Data): string => `
    <h3>You have a new message from Vionsys website (IT STAFFING LANDING PAGE Contact Form)!!!</h3>
    <br/>
    <h2><span style="font-weight: bold;">Full Name:</span> <span style="font-weight: lighter;">${data.name}</span></h2>
    <h2><span style="font-weight: bold;">Email Address:</span> <span style="font-weight: lighter;">${data.email}</span></h2>
    <h2><span style="font-weight: bold;">Contact Number:</span> <span style="font-weight: lighter;">${data.phone}</span></h2>
    <h2><span style="font-weight: bold;">Your Message:</span> <span style="font-weight: lighter;">${data.message}</span></h2>
`;
