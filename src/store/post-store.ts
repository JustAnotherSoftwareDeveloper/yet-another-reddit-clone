import { makeObservable, observable } from "mobx";
import { postMap } from "../data/posts";
import { Post } from "../model/post";

class PostStore {
  posts: Record<string, Post> = postMap;

  constructor() {
    makeObservable(this, {
      posts: observable,
    });
  }

  getById(id: string) {
    return this.posts[id];
  }

  upvote(id: string) {
    this.posts[id].votes += 1;
  }
  downvote(id: string) {
    this.posts[id].votes -= 1;
  }

  getBySubReddit(subredditId: string): Post[] {
    return Object.values(this.posts)
      .filter((p) => subredditId === "all" || p.subredditId === subredditId)
      .sort((p1, p2) => p2.votes - p1.votes);
  }
}

const postStore = new PostStore();

export { postStore as PostStore, PostStore as IPostStore };
