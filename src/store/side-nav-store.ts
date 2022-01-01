import { action, makeObservable, observable } from "mobx";

class SideNavStore {
  open = false;
  constructor() {
    makeObservable(this, {
      open: observable,
      toggleSideNav: action,
    });
  }

  toggleSideNav(open: boolean) {
    this.open = open;
  }
}

const sideNavStore = new SideNavStore();

export { sideNavStore as SideNavStore, SideNavStore as ISideNavStore };
