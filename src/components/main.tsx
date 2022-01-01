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
export interface MainParameters {
  sideNavStore: ISideNavStore;
}
const Main = observer((parameters: MainParameters) => {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
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
        <SideNav sideNavStore={parameters.sideNavStore}></SideNav>
      </Box>

      <Routes>
        <Route path="/">
          <Route path="r/:id" element={<SubReddit></SubReddit>}></Route>
          <Route index element={<Navigate to="r/all"></Navigate>}></Route>
        </Route>
      </Routes>
    </Router>
  );
});
function SubReddit() {
  return <div>SubReddit</div>;
}
export { Main };
