import React from 'react';
import Typography from '@material-ui/core/Typography';
import  Paper from '@material-ui/core/Paper';
import SkillRating from './SkillRating';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  root:{
    backgroundColor:'black'
  },
container:{
display:'flex',
alignSelf:'center',
marginRight:'0',
marginLeft:'0',
marginTop:'0',
marginBottom:'0',
backgroundColor:'hsl(256, 20%, 20%)',
alignContent:'center'


},
skillGrid:{
  width:'80%',

},
skillContainer:{
  display:'relative',
    borderWidth:'2px',
    paddingTop:'1%',
    paddingBottom:'0',
    paddingLeft:'0',
    paddingRight:'0',
    marginBottom:'20px',
    borderStyle:'solid',
    backgroundColor:'#967bb6',

},
backgroundContainer:{
  backgroundColor:'hsl(256, 20%, 20%)',
  margin:0,
  padding:0,
  width:'cover',
},
intro:{
  backgroundColor:'hsl(256, 20%, 60%)',
  textAlign:'center',
  paddingTop:'2vw',
  alignSelf:'center',
},

grid:{
  margin:'0px',
}

})

const About =()=>{

const classes = useStyles();


return(
<div id={'About Me'}className={classes.container}>
    <Grid justify={'center'}className={classes.grid} container spacing={3}>
      <Grid item xs={10}>
        <Paper className={classes.intro}elevation={24}>
        <Typography variant={'h4'}>
          I am a self taught fullstack developer, who values detail, security, and making projects looking to challenge myself on coding, design and everything else

        </Typography>

        </Paper>
        </Grid>
      <Grid className={classes.skillGrid} item xs={12} md={6}>
    <Paper className={classes.skillContainer}>
        <Typography align={'center'}variant={'h4'}>Programming Skills</Typography>
   <SkillRating skill={'Javascript'} level={80}/>
   <SkillRating skill={'CSS & HTML'} level={60}/>
   <SkillRating skill={'NODE JS'} level={80}/>
   <SkillRating skill={'REACT JS'} level={60}/>
   <SkillRating skill={'Material UI'} level={90}/>
   <SkillRating skill={'Photoshop'} level={60}/>
    </Paper>
    </Grid>
    <Grid item xs={12} md={6}>

    <Paper className={classes.skillContainer}>
    <Typography align={'center'} variant={'h4'}> Key Skills      </Typography>
    <SkillRating skill={'Responsive Design'} level={80}/>
   <SkillRating skill={'Fundemental Security'} level={100}/>
   <SkillRating skill={'Search Engine Optimization'} level={50}/>
   <SkillRating skill={'Database Knowledge'} level={80}/>
   <SkillRating skill={'Computer Fundementals'} level={100}/>
   <SkillRating skill={"RESTfull & GraphQL API's"} level={100}/>
</Paper>
</Grid>
    </Grid>
</div>
)

};

export default About;