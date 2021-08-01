import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Bookmarks from '@material-ui/icons/Bookmarks';

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
     {toggleDrawer && <Fab onClick={()=>{setToggleDrawer(!toggleDrawer)}}color="secondary" aria-label="Bookmarks">
<Bookmarks/>
      </Fab>
     }
    </div>
  );
}
export default FabItem;