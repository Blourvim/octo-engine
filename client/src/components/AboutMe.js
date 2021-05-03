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


const useStyles = makeStyles({
container:{
display:'flex',
width:'90%',
alignSelf:'center',
marginRight:'auto',
marginLeft:'auto',
marginTop:'4rem'
},
skillContainer:{
    display:'block',
    borderWidth:'2px',
    marginTop:0,
    margin:'3%',
    borderStyle:'solid',
    marginBottom:'0',
    paddingBottom:'0',

},
backEnd:{
},
frontEnd:{
},
general:{
},
bookMarks:{
    backgroundColor:'#222',
    color:'white'
},
navigationButtons:{
bottom:'0',
position:'absolute',
padding:'0',
margin:'0'
}


})

const About =()=>{

const classes = useStyles();
const [skillContainerPage, setSkillContainerPage]= useState(0)

const bookMarks =()=>(
    <List className={classes.bookMarks} >
          {[ 'About Me','Technologies','Portfilio', 'Contact' ].map((text, index) => (
            <ListItem onClick={(e)=>{console.log(e)}}button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>


)
const reduceSkillPage=()=>{
    skillContainerPage ===0 ?
    setSkillContainerPage(2):
    setSkillContainerPage((skillContainerPage-1))
}
const addSkillPage=()=>{
    skillContainerPage ===2 ?
    setSkillContainerPage(0):
    setSkillContainerPage((skillContainerPage+1))

}
return(
<Container className={classes.container}>
    <div className={classes.skillContainer}>

    {(skillContainerPage===0)&&<div className={classes.general}>       
        <Typography variant={'h4'}>General </Typography>
    <SkillRating value={5} skill={'Javascript ES6'}/>
    <SkillRating value={5} skill={'Git and version control'}/>
    <SkillRating value={5} skill={'Problem Solving'}/>
    <SkillRating value={5} skill={'English'}/>
    <SkillRating value={5} skill={'Turkish'}/>
    </div>
}


 { (skillContainerPage===1)&& <div className={classes.frontEnd}>
    <Typography variant={'h4'}>Front-End</Typography>
  <SkillRating value={3.5} skill={'Adobe Photoshop'}/>
  <SkillRating value={2} skill={'React JS'}/>
  <SkillRating value={5} skill={'HTML'}/>
  <SkillRating value={3} skill={'CSS'}/>
  </div>
}

{(skillContainerPage===2)&& <div className={classes.backEnd}>
      <Typography variant={'h4'}>Back-End</Typography>
      <SkillRating value={4} skill={'Web Security'}/> 
  <SkillRating value={5} skill={'Nodejs'}/>
  <SkillRating value={5} skill={'Authentication & Autherization'}/>
  <SkillRating value={5} skill={"GraphQL & RESTful API's"}/>
  <SkillRating value={5} skill={'Database Knowledge'}/>
  </div>
}
<div className={classes.navigationButtons}>
<Button onClick={()=>{reduceSkillPage()}}>{'<-'}</Button>
<Button onClick={()=>{addSkillPage()}}>   {'->'}</Button>
</div>
    </div>


    
    <div>
        <Typography variant={'h2'}>About Me</Typography>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi augue, accumsan sit amet ex eget, consectetur imperdiet justo. Sed sem nulla, hendrerit a luctus eu, lobortis vitae felis. Morbi congue nisi id cursus vehicula. Donec et massa et nisl ullamcorper auctor sed eu enim. Phasellus mattis vitae purus non interdum. Curabitur porta euismod ex. Donec ac tincidunt velit. Vivamus eu diam dapibus, facilisis sem at, venenatis enim. Duis dapibus ligula urna. Fusce luctus mi non risus dignissim, quis mollis quam sagittis. Donec id iaculis lorem. Sed a nisl molestie ligula dignissim porttitor. Cras non posuere nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Suspendisse elit justo, rhoncus a vestibulum ac, accumsan sit amet risus. Integer vehicula lacus ac metus dignissim, eu eleifend tortor venenatis. Curabitur vel neque vestibulum, tempus lacus id, tempus orci. Aenean vehicula orci sit amet tortor pretium pellentesque. Aliquam sit amet pulvinar orci. Suspendisse potenti. In pretium porta ligula, pharetra volutpat nisl elementum in. Phasellus eros nisl, rutrum vel risus eu, porta mollis orci. Praesent at nulla vehicula quam suscipit mollis sed et libero. Suspendisse pulvinar elit erat, vitae dictum urna euismod ac. Praesent varius aliquet dignissim. Donec a dignissim mauris, nec sollicitudin felis.

Mauris eu enim nulla. Phasellus semper ac nisl vitae ultrices. Nam venenatis dolor nec ex pharetra sodales. Donec aliquam nulla eu lorem lacinia finibus. Ut maximus varius risus, quis varius lectus convallis ut. Fusce aliquam ligula a lectus volutpat faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam elit mauris, posuere congue aliquet nec, interdum ac elit. Donec et ullamcorper nulla, vitae hendrerit nunc. Nam id sem vitae sapien euismod facilisis. Vivamus bibendum cursus quam, ac gravida est vehicula eget. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi vel mauris a magna maximus semper. Fusce vel pellentesque leo. 

    </div>
    <Container className={classes.linkContainer}>
        <List>
            asdasd
            {bookMarks()}
        </List>
        </Container>
    
</Container>
)

};

export default About;