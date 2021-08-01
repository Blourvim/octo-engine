import React from 'react';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import PortfilioCard from './PortfilioCard';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
    card:{
    },
cardMedia:{
    height:'400px'
},
divider:{
    paddingTop:'4vw',
    backgroundColor:'hsl(256, 20%, 20%)',
},
portfilioContainer:{

    marginTop:'5vw',
    marginBottom:'5vw',
    padding:0,
    marginRight:'0px',
    
},
backgroundContainer:{
    maxWidth:'100%',
    marginLeft:'0px',
    marginRight:'0px',
    overflowX:'hidden',
    backgroundColor:'hsl(256, 20%, 20%)',
    padding:0,

}

});


const Portfilio =()=>{
   const classes= useStyles();
const smallScreen = useMediaQuery('(max-width:300)')


return(<div id='Portfilio'className={classes.backgroundContainer}>
<div className={classes.divider}>
<Typography align={'center'}variant={'h3'}>My Portflio</Typography>
</div>


<Grid justify={'center'}className={classes.portfilioContainer}container spacing={smallScreen ? 0:3}>
{[
    {
     projectTitle:'Website incremental',
     description:'My first project.It is an incremental game about a website that builds up as you click. Where I experimented with DOM manipulation',
     link:'link',
     projectImage:'https://picsum.photos/200/300',
     githubLink:'githasdasfasub'
    },
    {
        projectTitle:'Doby Mick',
        description:'It is a game that features a text based game engine in a legend of zork style gameplay, a simple boat simulator that I coded to practice writing algoritms ',
        link:'liggnk',
        projectImage:'https://picsum.photos/200/300',
        githubLink:'gitasdashub'
       },
       {
        projectTitle:'Paw Paw Mewdia',
        description:"My social network project that features a secure authentication and autherizationflow, connects to a database, and allows users to interract",
        link:'https://protected-dawn-87400.herokuapp.com/#/',
        projectImage:'https://picsum.photos/200/300',
        githubLink:'https://github.com/Blourvim/octo-engine'
       }
    ].map(item=>(
        <PortfilioCard
                        key={item.githubLink}
                       projectTitle={item.projectTitle}
                       description={item.description}
                       link={item.link}
                       projectImage={item.projectImage}
                       githubLink={item.githubLink}
                       
                       />


    ))}
</Grid>
</div>)

}

export default Portfilio;