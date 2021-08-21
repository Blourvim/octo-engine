import React from 'react';
import {TextField,Button,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
const useStyles = makeStyles({

    form:{
        backgroundColor:'#f0d9b5',
        width:'550px',
        margin:'100px auto',
        padding:'25px',
        marginTop:''
    },
    textField:{
        margin:'15px'
    },
    button:{
        backgroundColor:'#289cbc',
        color:'#1c1b1a'
    }

})

const ContactForm = () => {
    const classes = useStyles()


    const handleSubmit =(e)=>{

        e.preventDefault()
        axios.post('https://paw-paw-mewdia.herokuapp.com/api/post/send-text',{
            email:e.target.email.value,
            message:e.target.message.value,
            name:e.target.name.value
        })
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
    }



  return (
    <form onSubmit={handleSubmit} className={classes.form}>
        <div>
            <Typography align='center'variant='h3'> Contact Me</Typography>
      <TextField name='from' className={classes.textField} required filled fullWidth autoComplete="none" label="From" />
      <TextField name='email' className={classes.textField} required filled fullWidth autoComplete="none" label="Email"/>
      <TextField name='message'className={classes.textField} required filled fullWidth multiline rows={5} label="Message"/>
      <Button className={classes.button}type="submit">Submit</Button>
      </div>
    </form>
  )
}
export default ContactForm