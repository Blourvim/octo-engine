import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AlternateEmail from '@material-ui/icons/AlternateEmail'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
    position:'absolute',
    top:'auto',
    width:'100%',
    height:'auto',

  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
      },
    },
 },

});

const Footer = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
     
  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const handleClick=()=>{
    navigator.clipboard.writeText("blourvim@gmail.com");
    handleTooltipOpen()
  }
  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction rel="noreferrer noopener" target="_blank"href={'https://www.linkedin.com/in/mert-y%C4%B1ld%C4%B1z-2457a020b'}icon={<LinkedInIcon />} className={classes.root} />
      <Tooltip disableFocusListener disableTouchListener title={open? "Copied":"Copy To Clipboard"}>

      <BottomNavigationAction onClick={()=>{handleClick()}} icon={<AlternateEmail/>} className={classes.root} />
      </Tooltip>
     
     <BottomNavigationAction icon={<GitHubIcon />} rel="noreferrer noopener" target="_blank"href='https://github.com/Blourvim'className={classes.root} />
    </BottomNavigation>
  );
};
export default Footer;