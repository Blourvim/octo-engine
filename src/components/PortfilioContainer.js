import React  from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import WebIcon from '@material-ui/icons/Web';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Container,Divider,IconButton,Link} from '@material-ui/core';

const useStyles = makeStyles({
container:{
    display:'flex',
    marginBottom:'50px',
    width:'80%',

},
text:{
    paddingTop:'20px',
    paddingRight:'20px',
    color:'#fefefe',
    fontSize:'1.2rem'
},
title:{
    paddingBottom:'1.2em'

},
image:{
    marginLeft:'1.2em',
    borderRadius:'9px',

},
icon:{
    width:'2em',
    height:'2em',
},
buttons:{
    width:'180px',
    display:'flex',
margin:'0 auto',


},

button:{
},
picture:{
}


})


const PortfilioContainer =(props)=>{

    const {picture, visual, title, body, logos, gitHubLink, projectLink } = props;
const classes = useStyles();

return(
    <>
<Container className={classes.container}>
    <div>
        <Typography align='center'variant='h4' className={classes.title}>Lorem Concectetur</Typography>
    <Typography className={classes.text} variant='p'>   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
    
    <div>


    </div>
    </div>
    <div className={classes.picture}>
<img className={classes.image}src='https://picsum.photos/450/350'alt='picsum'/> 
<Container className={classes.buttons}>
                 <Link className={classes.button}rel="noreferrer noopener" target="_blank" href={'https://www.linkedin.com/in/mert-y%C4%B1ld%C4%B1z-2457a020b'}>
                     <IconButton  ><GitHubIcon className={classes.icon} /></IconButton>
                 </Link>
                 <Link className={classes.button}rel="noreferrer noopener" target="_blank" href={'https://www.linkedin.com/in/mert-y%C4%B1ld%C4%B1z-2457a020b'}>
                     <IconButton  ><WebIcon className={classes.icon}/>
</IconButton>
                 </Link>
                 

             </Container>
             
             </div>
</Container>
<Divider dark/>
</>


)

}

export default PortfilioContainer