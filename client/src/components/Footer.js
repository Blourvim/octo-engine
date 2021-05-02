import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Twitter from "@material-ui/icons/Twitter";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  home: {
    background: "#222",
    marginTop:'50px',
    width:'fit',
 },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
 },
});

const Footer = (props) => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes[props.place]}>
      <BottomNavigationAction icon={<LinkedInIcon />} className={classes.root} />
      <BottomNavigationAction icon={<Twitter />} className={classes.root} />
      <BottomNavigationAction icon={<GitHubIcon />} className={classes.root} />
    </BottomNavigation>
  );
};
export default Footer;