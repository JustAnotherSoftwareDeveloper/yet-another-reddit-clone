import { action, makeObservable, observable } from "mobx";
import { PostComment } from "../model/comment";

class CommentStore {
  commentsById: Record<string, PostComment> = {};

  constructor() {
    makeObservable(this, {
      commentsById: observable,
      upvote: action,
      downvote: action,
    });
  }

  addComment(comment: PostComment) {
    this.commentsById[comment.id] = comment;
  }

  getById(id: string): PostComment {
    return this.commentsById[id];
  }

  upvote(commentId: string) {
    this.commentsById[commentId].votes++;
  }
  downvote(commentId: string) {
    this.commentsById[commentId].votes--;
  }

  getByPostId(postId: string): PostComment[] {
    return Object.values(this.commentsById)
      .filter((comment) => comment.postId === postId)
      .sort((a, b) => b.votes - a.votes);
  }
}

const commentStore = new CommentStore();

export { commentStore as CommentStore, CommentStore as ICommentStore };
