type Form2Data = {
  name: string;
  email: string;
  phone: {
    countryCode: String;
    number: string;
  };
  qualification: string;
  experience: string;
  comments: string;
  userType: String;
};

export const StaffingEmployeeTemplate = (data: Form2Data): string => `
    <h3>New CV Submission from Vionsys website(IT Staffing Landing Page from ${data.userType})!!!</h3>
    <br/>
    <h2><span style="font-weight: bold;">Full Name:</span> <span style="font-weight: lighter;">${data.name}</span></h2>
    <h2><span style="font-weight: bold;">Email:</span> <span style="font-weight: lighter;">${data.email}</span></h2>
    <h2><span style="font-weight: bold;">Contact Number:</span> <span style="font-weight: lighter;">${data.phone}</span></h2>
    <h2><span style="font-weight: bold;">Qualification:</span> <span style="font-weight: lighter;">${data.qualification}</span></h2>
    <h2><span style="font-weight: bold;">Experience:</span> <span style="font-weight: lighter;">${data.experience}</span></h2>
    <h2><span style="font-weight: bold;">Comments:</span> <span style="font-weight: lighter;">${data.comments}</span></h2>
`;
