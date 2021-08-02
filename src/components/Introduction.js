import { Container, Typography,Grid,Avatar } from '@material-ui/core'
import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles';
import PortfilioCard from './PortfilioCard';

const useStyles = makeStyles({

    container:{
margin:0,
height:'fit-content',
position:'relative',
minHeight:'100vh',
    },
    box: {
    
    },
    header:{
color:'#D8B384',
paddingTop:'40px',
marginRight:'5vw',
marginLeft:'5vw',
fontWeight:'bold',


    },
    text:{
        color:'#DFEEEA',
        paddingTop:'40px',
        marginRight:'5vw',
        marginLeft:'5vw',
        fontSize:'1.2rem'
        
    },
    portfilioContainer:{
        marginTop:'40px',
        paddingBottom:'60px',
        minHeight:'100%'
    },
    avatar:{
        width:'100px',
        height:'100px',
        marginLeft: 'auto ',
        marginRight:'auto',
        marginTop:'20px'
    },

})

const Introduction =()=>{
    const classes = useStyles()


return(
    <div className={classes.container}>
         <div className={classes.box}>
        <Avatar alt={'Avatar'} className={classes.avatar} src={'https://avatars.githubusercontent.com/u/71990861?v=4'}></Avatar>

        </div>
<Typography className={classes.header} align='center' variant='h3'> I AM A FULL-STACK DEVELOPER</Typography>

       
        <Typography align='center'className={classes.text}>
        I am comfortable in both front-end and back-end technologies, such as; React, HTML, CSS, Material UI, MongoDb, REST and Graph QL api's
        as well as confident in javascript and it's common libraries 


</Typography>

<Grid justify={'center'}className={classes.portfilioContainer}container spacing={0}>
{[
    {
     projectTitle:'Anime Search Bar',
     description:'By using a public API it makes requests as the user types, and fetches the results, using debounce to prevent too many requests, keeping the network unburdened without compromising user experience ',
     link:'https://blourvim.github.io/friendly-potato/',
     githubLink:'https://github.com/Blourvim/friendly-potato'
    },



    {
        projectTitle:'Paw Paw Mewdia',
        description:"My social network project that features a secure authentication and autherizationflow, connects to a database, and allows users to interract. In this project I used, mongoDB as my database, node as the back-end and passport for authentication",
        link:'https://protected-dawn-87400.herokuapp.com/#/',
        githubLink:'https://github.com/Blourvim/legendary-carnival'
       },

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


    </div>


)

}

export default Introduction