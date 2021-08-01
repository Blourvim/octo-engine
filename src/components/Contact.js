import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MyKey from './MyKey';


const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: 'hsl(256, 20%, 20%)',
    height: "90vh",
    width:'99vw'

  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    marginTop:'50px',
    position: "relative",
    width:'90%'
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
  text:{
    color:'tan'
  }
}));


const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.contactContainer} id='Contact'>
      <Grid container justify="center">
      <Grid item xs={12}>
          <Typography className={classes.heading}variant={'h3'}>Contact Me </Typography>

        </Grid>
        <Grid className={classes.form} item xs={8} xm={6}>
        <Typography className={classes.text} variant={'body'}>If you are looking to hire me for your company, hire me for contract work, have an exciting idea that you want to discuss, would like to give feedback on my projects, or anything else you can think of!</Typography>

          <Grid item xs={8} xm={6}>

          <MyKey/>

          </Grid>
          </Grid>
       </Grid>
       </div>
  );
};

export default Contact;