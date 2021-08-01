import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({
  skillListItem:{
    display:'flex',
    padding:'3px',
    height:'45px',
    marginLeft:'1rem',
    marginBottom:'0.5rem'

  },
  skillLevel:{
    display: 'table-cell',
    padding: '10px',
    verticalAlign: 'middle',
  },
  skillNameText:{
    color:'white',
    fontWeight:'bolder',
    fontSize:'0.90rem'

  },
  skillNamePrecent:{
fontSize:'1.5rem'

  }
 
})
const SkillRating =(props)=>{
  const {level,skill } = props;

  const classes = useStyles();

    return(
      <div className={classes.skillListItem}>
      <div className={classes.skillLevel}
      style={{ borderBottomRightRadius:'5px',borderTopRightRadius:'5px',width: `${level-5}%`, backgroundColor: `hsl(${281}, ${level}%, ${level/3}%)` }}
    >
        <Typography variant={'inherit'} className={classes.skillNameText}>{skill}</Typography>

    </div>
</div>

    )


};

export default SkillRating;