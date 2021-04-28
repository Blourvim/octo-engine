import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import SkillRating from './SkillRating';
import Divider from '@material-ui/core/Divider'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  header:{
    textAlign:'center',
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes.header}variant={'h2'}>About Me</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography className={classes.header}variant={'h6'}>My Skills</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={3} sm={2}>
  <SkillRating value={5} skill={'Javascript'}/>
  <SkillRating value={3} skill={'Adobe Photoshop'}/>
  <SkillRating value={2} skill={'React'}/>
  <SkillRating value={5} skill={'HTML'}/>
  <SkillRating value={5} skill={'Search Engine Optimization'}/>
  <SkillRating value={3} skill={'CSS'}/>
  <SkillRating value={5} skill={'Problem Solving'}/>
  <SkillRating value={5} skill={'Materiel UI'}/>

        </Grid>
        <Grid item xs={2} sm={2}>
  <SkillRating value={4} skill={'Web Security'}/> 
  <SkillRating value={5} skill={'Nodejs'}/>
  <SkillRating value={5} skill={'Authentication'}/>
  <SkillRating value={5} skill={'Autherization'}/>
  <SkillRating value={5} skill={"RESTful API's"}/>
  <SkillRating value={5} skill={'GraphQL'}/>
  <SkillRating value={5} skill={'Database Knowledge'}/>
  <SkillRating value={5} skill={'MongoDB'}/>










        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
