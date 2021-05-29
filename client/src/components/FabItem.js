import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      position:'fixed'
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const FabItem=()=> {
    const [toggleDrawer,setToggleDrawer] = useState(true)
  const classes = useStyles();

  return (
    <div className={classes.root}>
     {toggleDrawer && <Fab onClick={()=>{setToggleDrawer(!toggleDrawer)}}color="primary" aria-label="navigate">
<NavigationIcon/>
      </Fab>
     }
    </div>
  );
}
export default FabItem;