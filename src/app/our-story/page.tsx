import type { Metadata } from "next";

import { StoryPage } from "@/components/story/story-page";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Clara was built by the children of UK restaurant families. Our story: why we left software jobs to give independent restaurants their own software.",
};

export default function OurStory() {
  return <StoryPage />;
}
