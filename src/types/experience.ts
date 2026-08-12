export type ExperienceRole = {
  title: string;
  period: string;
  summary: string;
  achievements: readonly string[];
  capabilities: readonly string[];
};

export type Experience = {
  company: string;
  companyUrl: string;
  location: string;
  period: string;
  roles: readonly ExperienceRole[];
};
