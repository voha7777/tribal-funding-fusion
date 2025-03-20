
export interface StateData {
  fullName: string;
  abbreviation: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  mainContent: string;
  benefits: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  faqItems: Array<{
    question: string;
    answer: string;
  }>;
}

const getStateBenefits = (state: string): Array<{ title: string; description: string; icon: string }> => {
  // Rotate through different benefits for variety
  const benefitSets = [
    [
      {
        title: "Fast Approval Process",
        description: `Get quick decisions on your tribal loan application in ${state}, often within minutes of applying.`,
        icon: "clock",
      },
      {
        title: "Direct Deposit Funding",
        description: "Receive your approved loan amount directly to your bank account, sometimes as soon as the next business day.",
        icon: "dollar-sign",
      },
      {
        title: "Flexible Repayment Terms",
        description: "Choose repayment schedules that work with your financial situation and budget constraints.",
        icon: "calendar",
      },
      {
        title: "No Hidden Fees",
        description: "Transparent loan terms with clearly disclosed fees and interest rates before you commit.",
        icon: "shield",
      },
    ],
    [
      {
        title: "Bad Credit Considered",
        description: `Tribal lenders in ${state} often look beyond traditional credit scores when evaluating loan applications.`,
        icon: "trending-up",
      },
      {
        title: "Secure Application Process",
        description: "Your personal and financial information is protected with advanced encryption technology.",
        icon: "lock",
      },
      {
        title: "No Collateral Required",
        description: "Obtain an unsecured loan without having to put up valuable assets as collateral.",
        icon: "key",
      },
      {
        title: "24/7 Online Access",
        description: "Manage your loan account anytime through a convenient online portal.",
        icon: "smartphone",
      },
    ],
    [
      {
        title: "Simple Requirements",
        description: `${state} residents only need basic documentation to apply for tribal installment loans.`,
        icon: "file-text",
      },
      {
        title: "Competitive Rates",
        description: "Our tribal lending partners offer competitive rates compared to other short-term loan options.",
        icon: "percent",
      },
      {
        title: "Dedicated Customer Support",
        description: "Access helpful representatives who can answer questions about your loan application or account.",
        icon: "headphones",
      },
      {
        title: "Financial Education Resources",
        description: "Access helpful tools and information to improve your financial knowledge and decision-making.",
        icon: "book-open",
      },
    ],
  ];
  
  // Use a hash of the state name to select a consistent set of benefits
  const hash = state.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return benefitSets[hash % benefitSets.length];
};

const getStateFAQs = (state: string): Array<{ question: string; answer: string }> => {
  // Common FAQs with state-specific answers
  return [
    {
      question: `How do tribal loans work in ${state}?`,
      answer: `Tribal loans in ${state} are offered by lenders who operate under the sovereignty of Native American tribes. These installment loans provide borrowers with a lump sum that is repaid over time with fixed payments. The application process is typically online, with funds being deposited directly into approved applicants' bank accounts.`,
    },
    {
      question: `What are the requirements for getting a tribal loan in ${state}?`,
      answer: `To qualify for a tribal loan in ${state}, you generally need to: be at least 18 years old, have a valid checking account, provide proof of regular income, have a valid email address and phone number, and be a ${state} resident with a valid ID.`,
    },
    {
      question: "How much can I borrow with a tribal installment loan?",
      answer: "Tribal installment loan amounts typically range from $500 to $5,000, depending on the lender and your qualification factors such as income and credit history. First-time borrowers may be limited to lower amounts until they establish a payment history.",
    },
    {
      question: "How quickly can I receive funds after approval?",
      answer: "Once approved, funds are typically deposited into your bank account within 1-2 business days. Some lenders offer expedited funding options that may deliver funds on the same day of approval for an additional fee.",
    },
    {
      question: "Are tribal loans more expensive than traditional loans?",
      answer: "Tribal loans generally have higher interest rates than traditional bank loans or credit union products. However, they often provide access to funds for borrowers who may not qualify for conventional lending options, and they can be less expensive than payday loans when repaid according to the scheduled installments.",
    },
    {
      question: `Can I pay off my tribal loan early in ${state}?`,
      answer: `Yes, most tribal lenders allow borrowers in ${state} to pay off their loans early without prepayment penalties. Early repayment can save you money on interest charges over the life of the loan.`,
    },
  ];
};

const createStateData = (fullName: string, abbreviation: string): StateData => {
  const slug = fullName.toLowerCase().replace(/\s/g, '-');
  
  return {
    fullName,
    abbreviation,
    slug,
    metaTitle: `Tribal Installment Loans in ${fullName} (${abbreviation}) | Fast Funding Solutions`,
    metaDescription: `Get tribal installment loans in ${fullName} with competitive rates and flexible repayment options. Apply online for quick decisions and next-day funding for ${fullName} residents.`,
    heroTitle: `Tribal Installment Loans in ${fullName}`,
    heroSubtitle: `Access flexible funding solutions with tribal loans designed for ${fullName} residents.`,
    mainContent: `
      <p>Looking for financial assistance in ${fullName}? Tribal installment loans offer a flexible funding alternative for ${fullName} residents who need access to funds quickly. Whether you're facing unexpected expenses, emergency situations, or simply need to bridge a financial gap, tribal loans can provide a solution when traditional banking options may not be available.</p>
      
      <p>Our lending partners understand the unique financial challenges that ${fullName} residents face. With a streamlined application process, you can apply online in minutes and potentially receive a decision almost instantly. If approved, funds could be deposited directly into your bank account as soon as the next business day.</p>
      
      <p>Tribal installment loans differ from payday loans by offering longer repayment terms, allowing you to pay back the borrowed amount over multiple scheduled payments. This structure can make managing your finances more predictable and less stressful compared to single-payment loans that require full repayment on your next payday.</p>
      
      <p>As a ${fullName} resident, you can apply for tribal loans from the comfort of your home, without the need to visit a physical location or submit paperwork in person. The entire process is designed to be convenient, secure, and responsive to your financial needs.</p>
    `,
    benefits: getStateBenefits(fullName),
    faqItems: getStateFAQs(fullName),
  };
};

export const statesData: Record<string, StateData> = {
  "alabama": createStateData("Alabama", "AL"),
  "alaska": createStateData("Alaska", "AK"),
  "arizona": createStateData("Arizona", "AZ"),
  "arkansas": createStateData("Arkansas", "AR"),
  "california": createStateData("California", "CA"),
  "colorado": createStateData("Colorado", "CO"),
  "connecticut": createStateData("Connecticut", "CT"),
  "delaware": createStateData("Delaware", "DE"),
  "florida": createStateData("Florida", "FL"),
  "georgia": createStateData("Georgia", "GA"),
  "hawaii": createStateData("Hawaii", "HI"),
  "idaho": createStateData("Idaho", "ID"),
  "illinois": createStateData("Illinois", "IL"),
  "indiana": createStateData("Indiana", "IN"),
  "iowa": createStateData("Iowa", "IA"),
  "kansas": createStateData("Kansas", "KS"),
  "kentucky": createStateData("Kentucky", "KY"),
  "louisiana": createStateData("Louisiana", "LA"),
  "maine": createStateData("Maine", "ME"),
  "maryland": createStateData("Maryland", "MD"),
  "massachusetts": createStateData("Massachusetts", "MA"),
  "michigan": createStateData("Michigan", "MI"),
  "minnesota": createStateData("Minnesota", "MN"),
  "mississippi": createStateData("Mississippi", "MS"),
  "missouri": createStateData("Missouri", "MO"),
  "montana": createStateData("Montana", "MT"),
  "nebraska": createStateData("Nebraska", "NE"),
  "nevada": createStateData("Nevada", "NV"),
  "new-hampshire": createStateData("New Hampshire", "NH"),
  "new-jersey": createStateData("New Jersey", "NJ"),
  "new-mexico": createStateData("New Mexico", "NM"),
  "new-york": createStateData("New York", "NY"),
  "north-carolina": createStateData("North Carolina", "NC"),
  "north-dakota": createStateData("North Dakota", "ND"),
  "ohio": createStateData("Ohio", "OH"),
  "oklahoma": createStateData("Oklahoma", "OK"),
  "oregon": createStateData("Oregon", "OR"),
  "pennsylvania": createStateData("Pennsylvania", "PA"),
  "rhode-island": createStateData("Rhode Island", "RI"),
  "south-carolina": createStateData("South Carolina", "SC"),
  "south-dakota": createStateData("South Dakota", "SD"),
  "tennessee": createStateData("Tennessee", "TN"),
  "texas": createStateData("Texas", "TX"),
  "utah": createStateData("Utah", "UT"),
  "vermont": createStateData("Vermont", "VT"),
  "virginia": createStateData("Virginia", "VA"),
  "washington": createStateData("Washington", "WA"),
  "west-virginia": createStateData("West Virginia", "WV"),
  "wisconsin": createStateData("Wisconsin", "WI"),
  "wyoming": createStateData("Wyoming", "WY"),
};

export const getAllStatesPaths = () => {
  return Object.keys(statesData).map(slug => ({
    params: { state: slug },
  }));
};

export const getStateData = (slug: string): StateData | undefined => {
  return statesData[slug];
};

export const getAllStates = () => {
  return Object.values(statesData).map(state => ({
    fullName: state.fullName,
    abbreviation: state.abbreviation,
    slug: state.slug,
  }));
};
