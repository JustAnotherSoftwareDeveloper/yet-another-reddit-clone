import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { Main } from "./components/main";
import { SideNavStore } from "./store/side-nav-store";
function App() {
  return (
    <Box sx={{ display: "flex", flexGrow: 1, height: "100vh" }}>
      <Main sideNavStore={SideNavStore}></Main>
    </Box>
  );
}

function SubReddit() {
  return <div>SubReddit</div>;
}

export default App;
