export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  logo: string; // path under /public/images or an emoji fallback
};

export const experiences: Experience[] = [
  {
    company: "Sketchbrahma Technologies",
    role: "Senior Product Designer",
    period: "May 2022 – Present",
    description:
      "Experienced in project management and cross-functional collaboration, delivering exceptional user experiences with user-centric solutions.",
    logo: "/images/logos/sketchbrahma.svg",
  },
  {
    company: "Acho",
    role: "Product designer",
    period: "May 2022 – Jun 2023",
    description:
      "Delivering exceptional user experiences and design solutions, contributing to Ackodrive's success under the renowned Acko brand.",
    logo: "/images/logos/acho.svg",
  },
  {
    company: "Squash Apps",
    role: "UX designer",
    period: "Mar 2021 – Apr 2022",
    description:
      "Worked in diverse projects including internal parcel service product, hospital management system, SAAS websites, and engaging social media marketing posters.",
    logo: "/images/logos/squash.svg",
  },
  {
    company: "Freelancer",
    role: "UX designer",
    period: "Mar 2021 – Apr 2021",
    description:
      "Managed multiple projects simultaneously, meeting strict deadlines and delivering high-quality design solutions that aligned with clients' brand identities and business objectives.",
    logo: "/images/logos/freelancer.svg",
  },
];
