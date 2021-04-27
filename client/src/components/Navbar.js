import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import { makeStyles } from "@material-ui/core/styles";
import HamburgerNav from './HamburgerNav';

import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  body:{
    margin:0
  },
  appbar: {
    background: "#222",
    margin: 0,
    height: "4rem",

  },
  title: {
    color: "tan",
  },
  
  listItem: {
    color: "tan",
  },
  toolbar:{
    verticalAlign:'top',
    paddingRight:'0px'
  }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  
  return (
    <React.Fragment className={classes.root} >
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar className={classes.toolbar} >

            <Typography variant="h5" className={classes.title}>
            <HamburgerNav position="absulute"/>     
                    </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;