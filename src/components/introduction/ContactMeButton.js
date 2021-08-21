import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {useState} from 'react';
import ContactMeForm from './ContactMeForm';
const useStyles = makeStyles({
    button:{
        margin:'0 auto',
        alignSelf:'center',
        backgroundColor:'#d6cfcb',
        borderRadius:'9px',
        fontWeight:'lighter',
        borderStyle:'solid',
        borderWidth:'2px',
        '&:hover':{
            backgroundColor:'#9A8C98'
        }
        }

})


const ContactMeButton =()=>{
const classes = useStyles()
const [open, setOpen] = useState(false)
const handleClick=()=>{
setOpen(true)
}

const handleClose=()=>{
    setOpen(false)
}

return(
<>
    <Button 
className={classes.button}
startIcon={<MailIcon/>}
size='large'
onClick={handleClick}
>
Contact Me
</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
<ContactMeForm/>
</Modal>
</>
)

    
}
export default ContactMeButton