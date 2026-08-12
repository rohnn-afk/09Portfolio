export type Project = {
  title: string;
  category: string;
  role: string;
  stack: readonly string[];
  highlights: readonly string[];
  description: string;
  features: readonly [string, string, string, string];
  websiteUrl: string;
  image: {
    src: string;
    alt: string;
  };
  styles: {
    section: string;
    content: string;
    accent: string;
    imagePanel: string;
  };
};
