import { Drawer } from "@mui/material";
import { observer } from "mobx-react-lite";
import { ISideNavStore } from "../store/side-nav-store";

export interface SideNavParams {
  sideNavStore: ISideNavStore;
}
export const SideNav = observer((params: SideNavParams) => {
  return (
    <Drawer
      anchor="left"
      open={params.sideNavStore.open}
      onClose={() => params.sideNavStore.toggleSideNav(false)}
    >
      Hello World
    </Drawer>
  );
});
