import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import GrainIcon from '@material-ui/icons/Grain';
import PersonIcon from '@material-ui/icons/Person';
import Footer from './Footer';



const useStyles = makeStyles({
    list: {
      width: 260,
      alignItems:'end',
      height:'100%',
      overflowX: 'hidden',
      overflowY: 'hidden',
  

    },
    fullList: {
      alignItems:'end',
      overflowX: 'hidden',
      overflowY: 'hidden',

    },
    button:{
      color:'white',
    },
    box:{
      alignItems:'end',
      backgroundColor:'tomato',
      height:'100%',
      overflowX: 'hidden',

    },
    menubar:{
        background: "#222",
        height: "4rem",
        color:'white',
    },
    menuText:{
      padding:'1rem',
      paddingLeft:'2rem'
    }
  });
  
  export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
      left: false,
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List className={clsx(classes.box)} >
          {['Home','Portfilio', 'About Me', 'Contact' ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{[<HomeIcon/>,<GrainIcon/>,<PersonIcon/>,<ContactMailIcon/>][index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  
    return (
      <div >
      
        
          <React.Fragment key={'menu'}>
            <Button className={clsx(classes.button)}onClick={toggleDrawer('left', true)}>{'Menu'}</Button>
            <Drawer ModalProps={{BackdropProps:{invisible:true}}} anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            
        
            <div className={classes.menubar}>
            <Typography variant="h6" className={classes.menuText}>

              Menu
            </Typography>

            </div>
              {list('left')}
              <Footer/>
            </Drawer>
          </React.Fragment>
    
      </div>
    );
  }
  
  