import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const SkillRating =(props)=>{

    return(
      <Box component="fieldset" xs={1} borderColor="transparent">
        <Typography component="legend">{props.skill}</Typography>
        <Rating precision={0.5}name="read-only" value={props.value} readOnly />
      </Box>

    )


};

export default SkillRating;