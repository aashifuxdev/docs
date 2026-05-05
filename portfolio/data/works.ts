export type Goal = {
  number: string;
  title: string;
  description: string;
};

export type Metric = {
  label: string;
  current: string;
  expected: string;
  change: string;
};

export type ContentSection = {
  heading: string;
  body: string;
  image?: string;
  imageAlt?: string;
  layout?: "text-only" | "image-right" | "image-left" | "image-full";
};

export type Work = {
  slug: string;
  platform: string;
  title: string;
  subtitle: string;
  visitUrl: string;
  coverImage: string;
  overview: string;
  userGoals: Goal[];
  businessGoals: Goal[];
  metrics: Metric[];
  sections: ContentSection[];
  otherWorks: string[]; // slugs
  inProgress?: boolean;
};

export const works: Work[] = [
  {
    slug: "ackodrive",
    platform: "Racing platform · 2023",
    title: "Revamping the Car Buying Experience:",
    subtitle: "Designing Make & Model Page and Non-Assisted Journey",
    visitUrl: "https://www.ackodrive.com",
    coverImage: "/images/works/ackodrive-cover.png",
    overview:
      "Our analysis revealed that AckoDrive's MM page was underperforming in organic search traffic compared to competitors like Carwale and CarDekho. This was affecting business viability by increasing Customer Acquisition Cost (CAC). The goal was to redesign the MM page to improve organic traffic, improve SEO, and support the automotive generation of pages for new car models.",
    userGoals: [
      {
        number: "01",
        title: "Comprehensive Information",
        description: "Users want to access detailed information about car features and safety.",
      },
      {
        number: "02",
        title: "Easy Exploration",
        description: "Users should be able to navigate through various car categories and understand their unique attributes.",
      },
      {
        number: "03",
        title: "Direct Informed",
        description: "Users should be able to request quotes or express interest in the car effectively.",
      },
    ],
    businessGoals: [
      {
        number: "01",
        title: "Increase User Interest",
        description: "Increase user engagement and interest in purchasing the car model.",
      },
      {
        number: "02",
        title: "Increase Organic Traffic",
        description: "Enhance visibility and attract more organic traffic to the MM page.",
      },
    ],
    metrics: [
      { label: "Total session and Organic Traffic", current: "325,000 count", expected: "465,000 count", change: "+4.31% expected" },
      { label: "Availability and Recommendations", current: "415,019 Count", expected: "550,000 Count", change: "+17.5% expected" },
    ],
    sections: [
      {
        heading: "Design Challenge",
        body: "Feature Richness: Portraying the diverse features of different car models in a consistent layout.\n\nConsistency: Ensuring a cohesive and user-friendly design despite varying model attributes.\n\nAdaptability: Adapting the design to accommodate unique features of each car model while maintaining clarity and alignment.",
        layout: "text-only",
      },
      {
        heading: "Current MM page vs Redesigned MM page",
        body: "The redesigned page introduces a cleaner hierarchy, improved feature showcasing, and better SEO structure — surfacing key information above the fold and making variant comparison intuitive.",
        image: "/images/works/ackodrive-redesign.png",
        imageAlt: "Side-by-side comparison of current and redesigned MM page",
        layout: "image-full",
      },
      {
        heading: "Non-Assisted Buyer Journey / Customer Delight",
        body: "Currently, AckoDrive's car booking is a prolonged journey that significantly reduces customer satisfaction. This approach increases operational costs and limits user autonomy. Users face challenges with customization, transparent pricing, and understanding the car booking process, leading to inefficiencies and reduced satisfaction.",
        layout: "text-only",
      },
      {
        heading: "Design Solution",
        body: "A streamlined non-assisted flow allowing users to independently browse, customize, and book a vehicle — with transparent pricing, self-service financing options, and step-by-step booking clarity.",
        image: "/images/works/ackodrive-solution.png",
        imageAlt: "Non-assisted buyer journey design solution screens",
        layout: "image-full",
      },
    ],
    otherWorks: ["finbox", "quickrecruit", "yugaport"],
  },
  {
    slug: "finbox",
    platform: "Fintech · 2023",
    title: "Refining Financial Decision-Making:",
    subtitle: "Sentinel's Impact on Finbox",
    visitUrl: "https://finbox.in",
    coverImage: "/images/works/finbox-cover.png",
    overview:
      "In the fast-paced landscape of financial services, streamlined decision-making processes are paramount. Sentinel took the helm in refining Finbox's Minimum Viable Product (MVP), employing strategic UX methodologies to enhance financial decision-making efficiency.",
    userGoals: [
      {
        number: "01",
        title: "Streamlined Navigation",
        description: "Enable financial professionals to find and act on data without friction.",
      },
      {
        number: "02",
        title: "Intuitive Data Selection",
        description: "Allow users to select relevant data points within natural sentence-based interfaces.",
      },
    ],
    businessGoals: [
      {
        number: "01",
        title: "Reduce Error Rates",
        description: "Minimize decision errors by surfacing the right data at the right time.",
      },
      {
        number: "02",
        title: "Drive Platform Adoption",
        description: "Deliver a design that exceeds stakeholder expectations and builds confidence.",
      },
    ],
    metrics: [
      { label: "Turnaround Time Reduction", current: "Baseline", expected: "85% reduction", change: "–85%" },
      { label: "Approval Rate Growth", current: "Baseline", expected: "1.3x growth", change: "+30%" },
      { label: "Error Rate Reduction", current: "Baseline", expected: "95% reduction", change: "–95%" },
    ],
    sections: [
      {
        heading: "Strategic Approach to UX Design",
        body: "Customized Design Sprint: Sentinel initiated a customized Design Sprint, fostering collaboration and rapid iteration. This intensive process ensured that every design decision was aligned with Finbox's overarching vision and goals.\n\nJobs-to-be-Done Framework: Sentinel meticulously dissected user objectives and pain points, understanding the core tasks and motivations of financial professionals.\n\nInline Dropdown Designs: Revolutionary sentence-based selection interfaces that allow users to navigate and select relevant data points within sentences.",
        layout: "text-only",
      },
      {
        heading: "High-Fidelity Prototyping",
        body: "Sentinel led the creation of a comprehensive high-fidelity prototype for Finbox's MVP. This collaborative effort allowed stakeholders to visualize the platform's interface and functionality, facilitating informed feedback and iteration. The prototype served as a pivotal tool for early validation.",
        image: "/images/works/finbox-prototype.png",
        imageAlt: "High-fidelity Finbox prototype screens",
        layout: "image-full",
      },
      {
        heading: "Impact Created",
        body: "Following implementation, Finbox's impact on its client, IIFL, was profound — with an 85% reduction in turnaround time, a 1.3x growth in approval rates, and a remarkable 95% reduction in error rates.",
        image: "/images/works/finbox-impact.png",
        imageAlt: "Bar chart showing 82%, 85%, 85%, 95% impact metrics",
        layout: "image-right",
      },
      {
        heading: "Conclusion",
        body: "Sentinel's journey in crafting Finbox's MVP transcended mere design — it was a strategic endeavor to redefine financial decision-making. Through meticulous application of design principles, collaborative ideation, and innovative solutions like inline dropdown designs, Sentinel delivered impactful results that propelled Finbox and its clients toward operational excellence.",
        layout: "text-only",
      },
    ],
    otherWorks: ["ackodrive", "quickrecruit", "yugaport"],
  },
  {
    slug: "quickrecruit",
    platform: "HR Tech · 2023",
    title: "Rethinking HR Dynamics:",
    subtitle: "QuickRecruit's Design Revolution",
    visitUrl: "#",
    coverImage: "/images/works/quickrecruit-cover.png",
    overview:
      "It's a recruitment — as a service platform which helps companies in hiring for technical roles.",
    userGoals: [],
    businessGoals: [],
    metrics: [],
    sections: [],
    otherWorks: ["ackodrive", "finbox", "yugaport"],
  },
  {
    slug: "yugaport",
    platform: "Logistics · 2023",
    title: "Yugaport —",
    subtitle: "Website",
    visitUrl: "#",
    coverImage: "/images/works/yugaport-cover.png",
    overview:
      "Port logistics operations complete website that aligned with the company's brand identity.",
    userGoals: [],
    businessGoals: [],
    metrics: [],
    sections: [],
    otherWorks: ["ackodrive", "finbox", "quickrecruit"],
  },
  {
    slug: "influenca2",
    platform: "Marketing Platform · 2023",
    title: "Influenca2 —",
    subtitle: "Influencer Marketing Platform",
    visitUrl: "#",
    coverImage: "/images/works/influenca2-cover.png",
    overview: "Influencer marketing platform connecting brands with creators.",
    userGoals: [],
    businessGoals: [],
    metrics: [],
    sections: [],
    inProgress: true,
    otherWorks: ["ackodrive", "finbox", "quickrecruit"],
  },
];

export function getWork(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}

export function getOtherWorks(slug: string, slugs: string[]): Work[] {
  return slugs
    .map((s) => works.find((w) => w.slug === s))
    .filter((w): w is Work => w !== undefined);
}
