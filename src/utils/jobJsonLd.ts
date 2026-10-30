
export type Job = {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
};

// თქვენი contract ტექსტი → Schema.org-ის მნიშვნელობა
const EMPLOYMENT_TYPE: Record<string, string> = {
  "full time": "FULL_TIME",
  "part time": "PART_TIME",
  contract: "CONTRACTOR",
  freelance: "CONTRACTOR",
  temporary: "TEMPORARY",
  internship: "INTERN",
};

export function buildJobJsonLd(job: Job) {
  const html = `
    <p>${job.description}</p>
    <h3>Requirements</h3>
    <p>${job.requirements.content}</p>
    <ul>${job.requirements.items.map((i) => `<li>${i}</li>`).join("")}</ul>
    <h3>What You Will Do</h3>
    <p>${job.role.content}</p>
    <ol>${job.role.items.map((i) => `<li>${i}</li>`).join("")}</ol>
  `;

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.position,
    description: html,
    datePosted: job.postedAt,
    employmentType: EMPLOYMENT_TYPE[job.contract.toLowerCase()],
    identifier: {
      "@type": "PropertyValue",
      name: job.company,
      value: String(job.id),
    },
    hiringOrganization: {
      "@type": "Organization",
      name: job.company,
      sameAs: job.website,
      logo: job.logo,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location,
        // addressCountry: 'GE',  // დაამატეთ, თუ ქვეყანა ცნობილია
      },
    },
  };
}
