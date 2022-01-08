import { action, computed, makeObservable, observable } from "mobx";
import { subredditMap } from "../data/subreddits";
import { SubRedditModel } from "../model/sub-reddit";

class SubRedditStore {
  subreddits: Record<string, SubRedditModel> = subredditMap;

  constructor() {
    makeObservable(this, {
      subreddits: observable,
      allSubreddits: computed,
      addSubReddit: action,
    });
  }
  addSubReddit(subReddit: SubRedditModel) {
    this.subreddits[subReddit.name] = subReddit;
  }

  get allSubreddits() {
    return Object.values(this.subreddits);
  }

  specificSubreddit(name: string) {
    return this.subreddits[name];
  }
}

const subredditStore = new SubRedditStore();

export { subredditStore as SubRedditStore, SubRedditStore as ISubRedditStore };
