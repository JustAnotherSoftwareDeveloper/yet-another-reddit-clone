import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { ISideNavStore } from "../store/side-nav-store";
import { observer } from "mobx-react";
import { SideNav } from "./side-nav";
import { About } from "./about";
import { ISubRedditStore } from "../store/sub-reddit-store";
import { SubReddit } from "./subreddit";
import { IPostStore } from "../store/post-store";
import { PostDetail } from "./post-details";
import { ICommentStore } from "../store/comment-store";
export interface MainParameters {
  sideNavStore: ISideNavStore;
  subRedditStore: ISubRedditStore;
  postStore: IPostStore;
  commentStore: ICommentStore;
}
const Main = observer((parameters: MainParameters) => {
  return (
    <Router>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Box>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => parameters.sideNavStore.toggleSideNav(true)}
              >
                <MenuIcon></MenuIcon>
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                YARC
              </Typography>
            </Toolbar>
          </AppBar>
          <SideNav
            sideNavStore={parameters.sideNavStore}
            subRedditStore={parameters.subRedditStore}
          ></SideNav>
        </Box>
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Routes>
            <Route path="/">
              <Route
                path="r/:id"
                element={
                  <SubReddit
                    subredditStore={parameters.subRedditStore}
                    postStore={parameters.postStore}
                  ></SubReddit>
                }
              ></Route>
              <Route
                path="post/:id"
                element={
                  <PostDetail
                    commentStore={parameters.commentStore}
                    postsStore={parameters.postStore}
                  ></PostDetail>
                }
              ></Route>
              <Route path="about" element={<About></About>} />
              <Route index element={<Navigate to="r/all"></Navigate>}></Route>
            </Route>
          </Routes>
        </Box>
      </Box>
    </Router>
  );
});
export { Main };
