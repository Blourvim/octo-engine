import {Divider,Grid,Typography} from '@material-ui/core';
import React from 'react';
import {iconArray} from '../svg-repository/Icons';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
icon:{
    width:'100px',
    marginBottom:'40px'
},
container:{
    width:'80%',
    minWidth:'350px',
    margin:'0 auto',
    marginBottom:'50px'

},
title:{
    marginBottom:'50px',
    color:'#fbf9ca',
    fontWeight:'bolder'

}

})

const MySkills =()=>{
const classes= useStyles()
return(
    <Grid container className={classes.container}>
        <Grid item xs={12}>
        <Typography className={classes.title}align='center' variant='h3'>Some Technologies That I Use</Typography>

</Grid>
    {iconArray.map((icon,index)=>{
        return(

<Grid item key={icon.name} xs={12} sm={6} md={3} xl={2} className={classes.icon}align='center'>
{icon.svg}
</Grid>

        )
        


    })}

<Grid item xs={12} >
<Divider />

</Grid>
<Divider />

</Grid>

)

}
export default MySkills