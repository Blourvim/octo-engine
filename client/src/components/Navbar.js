import React, { useState } from "react";
import { Link } from 'react-scroll';
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import GrainIcon from '@material-ui/icons/Grain';
import PersonIcon from '@material-ui/icons/Person';
import Fab from '@material-ui/core/Fab';
import useMediaQuery from '@material-ui/core/useMediaQuery';


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
    paddingRight:'0px',
    alignSelf:'center',

  },
  box:{ 
    alignSelf:'center',
    display:'inline-flex',
    marginLeft:'0px',
    marginRight:'0px'
}
}));


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const bigScreen = useMediaQuery('(min-width:600px)')

  const classes = useStyles();

  
  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar className={classes.toolbar} >
        {bigScreen &&
        <List className={classes.box} >
        {['Home','Portfilio', 'About Me',  'Contact' ].map((text, index) => (
                        <Link key={text +'navbarlink'} activeClass="active" to={text} hashSpy={true} spy={true} smooth={true}>

          <ListItem button key={text +'navbar'}>
            <ListItemIcon key={text +'navbaricon'}>{[<HomeIcon/>,<GrainIcon/>,<PersonIcon/>,<ContactMailIcon/>][index]}</ListItemIcon>

            <ListItemText key={text +'navbartext'} primary={text} />
            
          </ListItem>
          </Link>
        ))}
      </List>
        
        }  
          </Toolbar>
        </AppBar>
      </Box>
      

    </React.Fragment>
  );
};

export default Navbar;