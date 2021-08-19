import React  from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import WebIcon from '@material-ui/icons/Web';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Container,Divider,IconButton,Link} from '@material-ui/core';


const useStyles = makeStyles({
container:{
    width:'90%',
    maxWidth:'900px',
    margin:'0 auto',
    display:'grid',
    paddingTop:'40px',
    paddingBottom:'40px'

},
text:{
    paddingTop:'20px',
    color:'#f2e9e4',
    fontSize:'1.2rem',
    maxWidth:'50ch',
    margin:'0 auto',


},
link:{
    paddingTop:'20px',
    paddingBottom:'20px',
    textDecoration:'none',
    color:'black',
    fontSize:'1.2rem'
},
title:{
    paddingBottom:'0.9em',
    color:'#f4a261'

},
image:{
    margin:'0 auto',
    width:'100%',
    alignSelf:'center',
    borderRadius:'5px'


},
icon:{
    width:'2em',
    height:'2em',
    color:'#22223B',
},


})


const PortfilioContainer =(props)=>{

    const {image, gif, title, description, githubLink, link } = props;
const classes = useStyles();

return(
    <>

<Container className={classes.container}>
<Typography align='center'variant='h4' className={classes.title}>{title}</Typography>

<img className={classes.image}src='https://picsum.photos/600/260'alt='picsum'/> 
<Typography className={classes.text} variant='p'>Website Link: <a href={link}className={classes.link} >{link}</a></Typography>
<Divider dark/>
<Typography className={classes.text} variant='p'>Source Code: <a href={githubLink}className={classes.link} >{githubLink}</a></Typography>
<Divider dark/>

<Typography className={classes.text} variant='p'>  {description} 
</Typography>


</Container>

<Divider dark/>
</>


)

}

export default PortfilioContainer