import { ExpandLess, ExpandMore, Info } from "@mui/icons-material";
import {
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import { ISideNavStore } from "../store/side-nav-store";

export interface SideNavParams {
  sideNavStore: ISideNavStore;
}
export const SideNav = observer((params: SideNavParams) => {
  const [open, setOpen] = React.useState(true);
  const handleCollapsibleClick = () => setOpen(!open);
  return (
    <Drawer
      anchor="left"
      open={params.sideNavStore.open}
      onClose={() => params.sideNavStore.toggleSideNav(false)}
    >
      <List>
        <ListItem>
          <Typography variant="h6">Yet Another Reddit Clone</Typography>
        </ListItem>
        <ListItemButton>
          <ListItemText>About</ListItemText>
          <Info></Info>
        </ListItemButton>
        <ListItemButton onClick={handleCollapsibleClick}>
          <ListItemText>SubReddits</ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div">
            <ListItemText>all</ListItemText>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
});
