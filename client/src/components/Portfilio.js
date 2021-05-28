import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import PortfilioCard from './PortfilioCard';

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
    display:'flex',
    width:'100vw',
    alignSelf:'center',
    marginTop:'5vw',
    paddingBottom:'5vw',
    justifyContent:'center',
    
},
backgroundContainer:{
    backgroundColor:'hsl(256, 20%, 20%)',
    padding:0,
    width:'99vw',

}

});


const Portfilio =()=>{
   const classes= useStyles();
return(<div className={classes.backgroundContainer}>
<div className={classes.divider}>
<Typography align={'center'}variant={'h3'}>My Portflio</Typography>
</div>


<Grid className={classes.portfilioContainer}container spacing={4}>
{[
    {
     projectTitle:'Website incremental',
     description:'My first project.It is an incremental game about a website that builds up as you click. Where I experimented with DOM manipulation',
     link:'link',
     projectImage:'https://picsum.photos/200/300',
     githubLink:'github'
    },
    {
        projectTitle:'Doby Mick',
        description:'It is a game that features a text based game engine, a simple boat simulator that I coded to practice writing algoritms ',
        link:'link',
        projectImage:'https://picsum.photos/200/300',
        githubLink:'github'
       },
       {
        projectTitle:'Mov Net',
        description:"My first fullstack social network project that features a secure authentication and autherizationflow, and friendship system uses API's and displays those results",
        link:'link',
        projectImage:'https://picsum.photos/200/300',
        githubLink:'github'
       },
       {
        projectTitle:'title',
        description:'description',
        link:'link',
        projectImage:'https://picsum.photos/200/300',
        githubLink:'github'
       }
    ].map(item=>(
        <PortfilioCard projectTitle={item.projectTitle}
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