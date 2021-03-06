import React  from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Container,Divider} from '@material-ui/core';


const useStyles = makeStyles({
container:{
    width:'90%',
    maxWidth:'800px',
    margin:'0 auto',
    display:'grid',
    paddingTop:'40px',
    paddingBottom:'40px'

},
text:{
    paddingTop:'20px',
    color:'#f2e9e4',
    fontSize:'1.4rem',
    maxWidth:'50ch',
    margin:'0 auto',


},
link:{
    paddingTop:'20px',
    paddingBottom:'20px',
    textDecoration:'none',
    color:'#98c1d9',
    fontSize:'1.2rem'
},
title:{
    paddingBottom:'0.9em',
    color:'#ced4da'

},
image:{
    margin:'0 auto',
    width:'100%',
    alignSelf:'center',
    borderRadius:'5px'


},

})


const PortfilioContainer =(props)=>{

    const {image, title, description, githubLink, link } = props;
const classes = useStyles();

return(
    <>

<Container className={classes.container}>
<Typography align='center'variant='h4' className={classes.title}>{title}</Typography>

<img className={classes.image}src={image}alt='picsum'/> 
<Typography className={classes.text} variant='body1'>Website Link: <a href={link}className={classes.link} >{link}</a></Typography>
<Divider />
<Typography className={classes.text} variant='body1'>Source Code: <a href={githubLink}className={classes.link} >{githubLink}</a></Typography>
<Divider />

<Typography className={classes.text} variant='body1'>  {description} 
</Typography>


</Container>

<Divider />
</>


)

}

export default PortfilioContainer