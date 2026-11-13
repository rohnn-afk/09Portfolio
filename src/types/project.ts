export type Project = {
  title: string;
  category: string;
  role: string;
  stack: readonly string[];
  highlights: readonly string[];
  description: string;
  features: readonly string[];
  websiteUrl: string;
  repositoryUrl?: string;
  opportunity?: string;
  contribution?: string;
  visualSteps: readonly [string, string, string];
  styles: {
    section: string;
    content: string;
    accent: string;
    imagePanel: string;
  };
};
