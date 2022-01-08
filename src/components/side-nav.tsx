import { ExpandLess, ExpandMore, Info } from "@mui/icons-material";
import {
  Box,
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
import { Link } from "react-router-dom";
import LinkIcon from "@mui/icons-material/Link";
import { ISubRedditStore } from "../store/sub-reddit-store";
import { SubRedditLink } from "./subreddit-link";
export interface SideNavParams {
  sideNavStore: ISideNavStore;
  subRedditStore: ISubRedditStore;
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
        <ListItemButton component={Link} to="/about">
          <ListItemText>About</ListItemText>
          <Info></Info>
        </ListItemButton>
        <ListItemButton onClick={handleCollapsibleClick}>
          <ListItemText>SubReddits</ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <ListItem>
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
            sx={{
              width: "100%",
            }}
          >
            <List component="div">
              <Box
                sx={{
                  display: "flex",
                  justifyItems: "space-between",
                  flexGrow: 1,
                  flexDirection: "column",
                }}
              >
                <ListItemButton component={Link} to="/r/all">
                  <ListItemText>All</ListItemText>
                  <LinkIcon></LinkIcon>
                </ListItemButton>
                {params.subRedditStore.allSubreddits.map((sub) => (
                  <SubRedditLink subreddit={sub}></SubRedditLink>
                ))}
              </Box>
            </List>
          </Collapse>
        </ListItem>
      </List>
    </Drawer>
  );
});
