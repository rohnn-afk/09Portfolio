import type { ProjectCapture } from "../components/ProjectMedia";

export const projectMedia: Record<
  string,
  { tone: string; captures: readonly ProjectCapture[]; contribution: string }
> = {
  ViewCount: {
    tone: "analytics",
    contribution:
      "Browser SDK, event ingestion APIs, and the reporting dashboard.",
    captures: [
      {
        src: "/projects/viewcount-overview.webp",
        alt: "ViewCount project dashboard displaying a fictional test workspace",
        caption: "Project dashboard · test data. Metrics are unvalidated.",
      },
      {
        src: "/projects/viewcount-sdk.webp",
        alt: "ViewCount SDK integration guide with its placeholder API key",
        caption: "SDK integration guide · fictional test workspace.",
      },
    ],
  },
  "09-Fitness.AI": {
    tone: "fitness",
    contribution:
      "Voice intake, AI plan generation, authentication, and saved plans.",
    captures: [
      {
        src: "/projects/fitness-voice.webp",
        alt: "Fitness AI voice conversation screen with an inactive test profile",
        caption: "Voice interface · rendered from source, inactive call.",
      },
    ],
  },
  "Savana Dating Web App": {
    tone: "savana",
    contribution:
      "Profiles, mutual matching, media storage, and realtime messaging.",
    captures: [
      {
        src: "/projects/savana-profile.webp",
        alt: "Savana profile interface with a neutral avatar and fictional profile details",
        caption: "Profile interface · fictional test account.",
      },
    ],
  },
};
