import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AlternateEmail from '@material-ui/icons/AlternateEmail'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
    position:'absolute',
    top:'auto',
    width:'100%',
    height:'67px'
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
 text:{
   color:'#D2B48C',
   fontSize:'1.2rem',
   marginTop:'1.4rem',
   marginLeft:'10px'
 }
});

const Footer = (props) => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <Typography className={classes.text}>Contact me:</Typography>
      <BottomNavigationAction rel="noreferrer noopener" target="_blank"href={'https://www.linkedin.com/in/mert-y%C4%B1ld%C4%B1z-2457a020b'}icon={<LinkedInIcon />} className={classes.root} />
      <BottomNavigationAction onClick={()=>{alert('Please mail me at blourvim@gmail.com')}} icon={<AlternateEmail/>} className={classes.root} />
      <BottomNavigationAction icon={<GitHubIcon />} rel="noreferrer noopener" target="_blank"href='https://github.com/Blourvim'className={classes.root} />
    </BottomNavigation>
  );
};
export default Footer;