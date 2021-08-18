import {Typography,Grid,Divider } from '@material-ui/core'
import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles';
import PortfilioCard from './PortfilioCard';
import ContactCard from './ContactCard';

const useStyles = makeStyles({

    container:{
margin:0,
height:'fit-content',
position:'relative',
    },
   
    header:{
color:'#22223B',
paddingTop:'40px',
marginRight:'5vw',
marginLeft:'5vw',
fontWeight:'bold',


    },
    text:{
        color:'#F2E9E4',
        paddingTop:'40px',
        margin:'0 auto',
        fontSize:'1.2rem',
        maxWidth:'50rem',
        padding:'2rem'
        
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
       
  

<Grid justify={'center'}className={classes.portfilioContainer}container spacing={0}>
<ContactCard/>

<Typography align='center'className={classes.text}>
        I am comfortable in both front-end and back-end technologies, such as; React, HTML, CSS, Material UI, MongoDb, REST and Graph QL api's
        as well as confident in javascript and it's common libraries 


</Typography>
 <Grid item xs='12'>
 <Divider dark/>



 </Grid>
</Grid>
    

    </div>


)

}

export default Introduction