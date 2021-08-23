import React from 'react';
import {Divider,Avatar,Grid,Typography,IconButton,Link,Tooltip} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AlternateEmail from '@material-ui/icons/AlternateEmail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Flash from 'react-reveal/Flash';

const useStyles = makeStyles({
    root:{
        padding:'25px',
        display:'flex',
        marginTop:'3em'
    },
    avatar:{
        height:'200px',
        width:'200px',
        alignSelf:'center',
        marginBottom:'8px',
        borderStyle:'solid',
        borderWidth:'2px',
    },
    button:{
        marginTop:'4px',
        color:'black',
        backgroundColor:'#dee2e6',
        margin:'5px',
        borderStyle:'solid',
        borderWidth:'2px',

        '&:hover':{
            backgroundColor:'#ced4da'
        }
    },
    text:{
        fontSize:'1.8rem',
        lineHeight:'1.1',
        letterSpacing:'-1.4px',
        color:'#ced4da'
},
    title:{
        color:'#ced4da',
     
        marginTop:'30px',
        fontSize:'2.2rem',
        lineHeight:'1.1',
        fontWeight:'bolder',
        textAlign:'center',
        paddingBottom:'0.4em',



    },
avatarContainer:{
    display:'grid'
},



})


  

const ContactCard = ()=>{
      const [open, setOpen] = React.useState(false);
     
      const handleTooltipOpen = () => {
        setOpen(true);
      };
      const handleClick=()=>{
        navigator.clipboard.writeText("blourvim@gmail.com");
        handleTooltipOpen()
      }
  
const classes = useStyles()
 return(
     <Grid item xs={11} sm={10}>
<Divider />


         <Grid className={classes.root} container>

             <Grid align='center'item md={4} xs ={12}>
                 <Avatar variant='rounded'alt={'Avatar'} className={classes.avatar} src={'https://avatars.githubusercontent.com/u/71990861?v=4'}></Avatar>
                 <Flash>

             <div>
                 <Link aria-label='Button for linkedIn'rel="noreferrer noopener" target="_blank" href={'https://www.linkedin.com/in/mert-y-2457a020b/'}>
                     <IconButton aria-label='Button for linkedIn'className={classes.button} ><LinkedInIcon /></IconButton>
                 </Link>

       
                 <Link aria-label='Button for linkedIn' rel="noreferrer noopener" target="_blank" href='https://github.com/Blourvim'>
                 
                 <IconButton aria-label='Button to GitHub' className={classes.button} > <GitHubIcon /></IconButton>
                 </Link>
              
                 <Tooltip disableFocusListener disableTouchListener title={open? "Copied":"Copy To Clipboard"}>
            <IconButton aria-label='Copy e-mail adress'onClick={()=>{handleClick()}} className={classes.button} ><AlternateEmail/></IconButton>
          </Tooltip>

             </div>
</Flash>

             </Grid>

             <Grid className={classes.avatarContainer}item md={7} xs ={12}>
             <Typography align='center' className={classes.title}variant='h6'>Hello, I am Mert Yıldız,</Typography>

             <Typography className={classes.text}variant='h6'>A web developer, who is passionate about learning the technologies that makes internet so great.</Typography>


             </Grid>
             
             </Grid>
         
         
<Divider />
     </Grid>
 ) 
}

export default ContactCard