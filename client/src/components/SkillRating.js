import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({
  skillListItem:{
    display:'flex',
    padding:'3px',
    height:'45px'
  },
  skillName:{
    backgroundColor:'black',
    color:'white',
    display: 'table-cell',
    padding: '12px',
    verticalAlign: 'middle',
   width:'30%',
    fontSize:'85%'
  },
  skillLevel:{
    display: 'table-cell',
    padding: '10px',
    verticalAlign: 'middle',
  },
 
})
const SkillRating =(props)=>{
  const {level,skill } = props;

  const classes = useStyles();

    return(
      <div className={classes.skillListItem}>
      <div className={classes.skillName} key={skill}>
        <Typography variant={'inherit'} className={classes.skillNameText}>{skill}</Typography>
        </div>
      <div className={classes.skillLevel}
      style={{ borderBottomRightRadius:'5px',borderTopRightRadius:'5px',width: `${level/2}%`, backgroundColor: `hsl(${281}, ${level}%, ${level/3}%)` }}
    >
      <Typography variant={'p'}>{level}%</Typography>
    </div>
</div>

    )


};

export default SkillRating;