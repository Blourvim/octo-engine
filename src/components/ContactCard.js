import React from 'react';
import {Divider,Avatar,Grid,Typography,IconButton,Link,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AlternateEmail from '@material-ui/icons/AlternateEmail'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
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
        marginBottom:'8px'
    },
    button:{
        marginTop:'4px',
        color:'black',
        backgroundColor:'#E9ECEF',
        margin:'5px'
    },
    text:{
        marginLeft:'1.2em',
        color:'#fefefe',
        fontSize:'2rem',
        lineHeight:'1.1'
},
    title:{
     
        marginLeft:'1.2em',
        marginTop:'30px',
        fontSize:'2.2rem',
        lineHeight:'1.1',
        color:'#fefefe',
        fontWeight:'bolder'



    },
avatarContainer:{
    display:'grid'
},
contactMeButton:{
margin:'0 auto',
alignSelf:'center',
backgroundColor:'#fefefe',
borderRadius:'9px',
fontWeight:'lighter',
borderStyle:'solid',
borderWidth:'2px',
}


})

const ContactCard = ()=>{
const classes = useStyles()
 return(
     <Grid item xs='11' sm='10'>
<Divider light/>


         <Grid className={classes.root} container>

             <Grid align='center'item md='3' xs ='12'>
                 <Avatar variant='rounded'alt={'Avatar'} className={classes.avatar} src={'https://avatars.githubusercontent.com/u/71990861?v=4'}></Avatar>

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

             <Grid className={classes.avatarContainer}item md='9' xs ='12'>
             <Typography className={classes.title}variant='h6'>Hello, I am Mert Yıldız,</Typography>

             <Typography className={classes.text}variant='h6'>A full-stack web developer, who is passionate about learning the technologies that makes internet so great.</Typography>

<Button 
className={classes.contactMeButton}
startIcon={<MailIcon/>}
size='large'
>Contact me
</Button>
             
             </Grid>
             
             </Grid>
         
         
<Divider dark/>
     </Grid>
 ) 
}

export default ContactCard