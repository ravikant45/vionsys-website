interface PriceContent {
  id: number;
  benefit: string;
}

const starterPackBenefits: PriceContent[] = [
  { id: 1, benefit: "Basic project tools" },
  { id: 2, benefit: "Up to 5 website pages" },
  { id: 3, benefit: "10 GB storage" },
  { id: 4, benefit: "Access to basic templates" },
  { id: 5, benefit: "Standard support" },
  { id: 6, benefit: "Email support" },
];

const proPackBenefits: PriceContent[] = [
  { id: 1, benefit: "Advanced project tools" },
  { id: 2, benefit: "Up to 10 website pages" },
  { id: 3, benefit: "50 GB storage" },
  { id: 4, benefit: "Custom domain integration" },
  { id: 5, benefit: "Priority support" },
  { id: 6, benefit: "Access to premium templates" },
];

const businessPackBenefits: PriceContent[] = [
  { id: 1, benefit: "Comprehensive project suite" },
  { id: 2, benefit: "Up to 20 website pages" },
  { id: 3, benefit: "100 GB storage" },
  { id: 4, benefit: "Advanced security features" },
  { id: 5, benefit: "Dedicated support" },
  { id: 6, benefit: "Custom software development tools" },
];

export { starterPackBenefits, proPackBenefits, businessPackBenefits };
