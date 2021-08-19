import React from 'react';


import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { ContactSupportRounded } from '@material-ui/icons';
const useStyles = makeStyles({
    button:{
        margin:'0 auto',
        alignSelf:'center',
        backgroundColor:'#d6cfcb',
        borderRadius:'9px',
        fontWeight:'lighter',
        '&:hover':{
            backgroundColor:'#9A8C98'
        }
        }

})


const ContactMeButton =()=>{
const classes = useStyles()

const handleClick=()=>{

    

}

return(

    <Button 
className={classes.button}
startIcon={<MailIcon/>}
size='large'
onClick={()=>{handleClick()}}
>
Contact Me
</Button>

)

    
}
export default ContactMeButton