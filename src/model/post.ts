export interface Post {
  type: "link" | "text";
  id: string;
  link?: string;
  description: string;
  content?: string;
  subredditId: string;
  votes: number;
}
