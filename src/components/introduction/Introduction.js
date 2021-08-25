import {Typography,Grid,Divider } from '@material-ui/core'
import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles';
import ContactCard from './ContactCard';

const useStyles = makeStyles({

    container:{
margin:0,
height:'fit-content',
position:'relative',
    },
   
    text:{
        color:'#ced4da',
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
       
  

<Grid justifyContent={'center'}className={classes.portfilioContainer}container spacing={0}>
<ContactCard/>

<Typography align='center'className={classes.text}>
        I am confident in both front-end and back-end technologies, such as; React, HTML, CSS, MongoDb, REST and Graph QL API's
        as well as proficent in javascript and it's many libraries.  


</Typography>
 <Grid item xs={12}>
 <Divider />



 </Grid>
</Grid>
    

    </div>


)

}

export default Introduction