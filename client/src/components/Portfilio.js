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
    marginLeft:'0px',
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
        description:'It is a game that features a text based game engine, a simple boat simulator that I coded to practice writing algoritms ',
        link:'liggnk',
        projectImage:'https://picsum.photos/200/300',
        githubLink:'gitasdashub'
       },
       {
        projectTitle:'Mov Net',
        description:"My first fullstack social network project that features a secure authentication and autherizationflow, and friendship system uses API's and displays those results",
        link:'lissnk',
        projectImage:'https://picsum.photos/200/300',
        githubLink:'gsditashub'
       },
       {
        projectTitle:'title',
        description:'description',
        link:'lisdnk',
        projectImage:'https://picsum.photos/200/300',
        githubLink:'giasdasthub'
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