import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import GrainIcon from '@material-ui/icons/Grain';
import PersonIcon from '@material-ui/icons/Person';
import Footer from './Footer';
import { Link} from 'react-scroll'
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import zIndex from '@material-ui/core/styles/zIndex';




const useStyles = makeStyles({
    list: {
      width: 'fit',
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
      color:'black',
      position:'fixed',
      zIndex:'100',
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
      paddingLeft:'2rem',
      color:'white'
    }
  });
  
  export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
      left: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({state, [anchor]: open });
    };
  
    const list = (anchor) => (
      
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top'
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List className={clsx(classes.box)} >
          {['Home','Portfilio', 'About Me',  'Contact' ].map((text, index) => (
                          <Link activeClass="active" to={text} hashSpy={true} spy={true} smooth={true}>

            <ListItem button key={text}>
              <ListItemIcon>{[<HomeIcon/>,<GrainIcon/>,<PersonIcon/>,<ContactMailIcon/>][index]}</ListItemIcon>

              <ListItemText primary={text} />
              
            </ListItem>
            </Link>
          ))}
        </List>
      </div>
    );
  
    return (
      <div >
      
        
          <React.Fragment key={'menu'}>
            <Fab color="primary" aria-label="navigate" className={clsx(classes.button)}onClick={toggleDrawer('left', true)}>
            <NavigationIcon/>

            </Fab>
            <Drawer ModalProps={{BackdropProps:{invisible:true}}} anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
              {list('left')}
              <Footer place={'bottomNavContainer'}/>
            </Drawer>
          </React.Fragment>
    
      </div>
    );
  }
  
  