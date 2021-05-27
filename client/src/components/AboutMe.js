import React ,{useState}from 'react';
import Typography from '@material-ui/core/Typography';
import  Paper from '@material-ui/core/Paper';
import SkillRating from './SkillRating';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  root:{
    backgroundColor:'black'
  },
container:{
width:'98%',
display:'grid',
alignSelf:'center',
marginRight:'auto',
marginLeft:'auto',
marginTop:'4rem',
marginBottom:'0',

},
skillContainer:{
  display:'relative',

    borderWidth:'2px',
    paddingTop:'1%',
    paddingBottom:'0',
    paddingLeft:'0',
    paddingRight:'0',
    marginBottom:'0',

    borderStyle:'solid',
    backgroundColor:'#967bb6',

},
bookMarks:{
    backgroundColor:'#222',
    color:'white'
},

button:{
    backgroundColor:'#7c5aa4',
    width:'50%',
    padding:'0',
    margin:'0',
    height:'50px'
}


})

const About =()=>{

const classes = useStyles();

const bookMarks =()=>(
    <List className={classes.bookMarks} >
          {[ 'About Me','Technologies','Portfilio', 'Contact' ].map((text, index) => (
            <ListItem onClick={(e)=>{console.log(e)}}button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>


)


return(
<Container className={classes.container}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper elevation={24}>
        <Typography variant={'h3'}>
          I am a self taught fullstack developer, who values detail, security, and making projects looking to challange myself on coding

        </Typography>

        </Paper>
        </Grid>
      <Grid item xs={12} md={6}>
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
   <SkillRating skill={'SEO'} level={50}/>
   <SkillRating skill={'Database'} level={80}/>
   <SkillRating skill={'Computer Fundementals'} level={100}/>
   <SkillRating skill={"API's"} level={100}/>
</Paper>
</Grid>
    </Grid>
</Container>
)

};

export default About;