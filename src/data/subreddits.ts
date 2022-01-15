import { SubRedditModel } from "../model/sub-reddit";

const subreddits: SubRedditModel[] = [
  {
    name: "tech",
    description: "All things technology related",
  },
  {
    name: "cooking",
    description: "Find great tips for making the best meal",
  },
  {
    name: "news",
    description: "Everything that happened in the world today",
  },
  {
    name: "nfl",
    description: "All things related to NFL football",
  },
];
const subredditMap: Record<string, SubRedditModel> = Object.fromEntries(
  subreddits.map((sub) => [sub.name, sub])
);

export { subredditMap };
