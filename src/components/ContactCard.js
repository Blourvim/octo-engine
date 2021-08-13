import React from 'react';
import {Card,Avatar,Grid,Typography,IconButton,Link} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AlternateEmail from '@material-ui/icons/AlternateEmail'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const useStyles = makeStyles({
    root:{
        backgroundColor:'#ADB5BD',
        padding:'25px',
        display:'flex'
    },
    avatar:{
        height:'150px',
        width:'150px',
        alignSelf:'center',
    },
    button:{
        marginTop:'4px',
        color:'black',
        backgroundColor:'#E9ECEF'
    },
    text:{
        marginLeft:'20px',
        marginTop:'30px'

},
avatarContainer:{
    display:'grid'
}


})

const ContactCard = ()=>{
const classes = useStyles()
 return(
     <Grid item xs='7'>

         <Card className={classes.root}>
         <Grid container>

             <Grid align='center'item md='3' xs ='12'>
                 <Avatar alt={'Avatar'} className={classes.avatar} src={'https://avatars.githubusercontent.com/u/71990861?v=4'}></Avatar>

             <div>
                 <Link rel="noreferrer noopener" target="_blank" href={'https://www.linkedin.com/in/mert-y%C4%B1ld%C4%B1z-2457a020b'}>
                     <IconButton className={classes.button} ><LinkedInIcon /></IconButton>
                 </Link>
                 <IconButton onClick={() => { alert('Please mail me at blourvim@gmail.com') }} className={classes.button} > <AlternateEmail /> </IconButton>
                 <Link rel="noreferrer noopener" target="_blank" href='https://github.com/Blourvim'>
                 
                 <IconButton  className={classes.button} > <GitHubIcon /></IconButton>
                 </Link>

             </div>
             </Grid>

             <Grid item md='9' xs ='12'>

             <Typography className={classes.text}variant='h6'>Hello, I am Mert Yıldız, a full-stack web developer, who is passionate about learning the technologies that makes internet so great.</Typography>
             </Grid>
             
             </Grid>
         
         
         </Card>


     </Grid>
 ) 
}

export default ContactCard