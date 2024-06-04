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
  { id: 7, benefit: "SEO basics package" },
  { id: 8, benefit: "Monthly performance report" },
  { id: 9, benefit: "1 year of free website hosting" },
];

const proPackBenefits: PriceContent[] = [
  { id: 1, benefit: "Advanced project tools" },
  { id: 2, benefit: "Up to 10 website pages" },
  { id: 3, benefit: "50 GB storage" },
  { id: 4, benefit: "Custom domain integration" },
  { id: 5, benefit: "Priority support" },
  { id: 6, benefit: "Access to premium templates" },
  { id: 7, benefit: "SEO advanced package" },
  { id: 8, benefit: "Bi-weekly performance report" },
  { id: 9, benefit: "1 year of free website hosting" },
  { id: 10, benefit: "Social media integration" },
  { id: 11, benefit: "Basic e-commerce features" },
];

const businessPackBenefits: PriceContent[] = [
  { id: 1, benefit: "Comprehensive project suite" },
  { id: 2, benefit: "Up to 20 website pages" },
  { id: 3, benefit: "100 GB storage" },
  { id: 4, benefit: "Advanced security features" },
  { id: 5, benefit: "Dedicated support" },
  { id: 6, benefit: "Custom software development tools" },
  { id: 7, benefit: "SEO premium package" },
  { id: 8, benefit: "Weekly performance report" },
  { id: 9, benefit: "1 year of free website hosting" },
  { id: 10, benefit: "Advanced e-commerce features" },
  { id: 11, benefit: "Multilingual website support" },
  { id: 12, benefit: "Personalized training sessions" },
  { id: 13, benefit: "Regular backups & maintenance" },
];

export { starterPackBenefits, proPackBenefits, businessPackBenefits };
