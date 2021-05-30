import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

const useStyles =makeStyles({
    cardMedia:{
        height:'200px',
    }


})
const PortfilioCard = (props)=>{

const classes = useStyles()
const {description,projectImage,link,githubLink,projectTitle} = props
    return(
        <Grid item xs={5} sm={5}md={2} xl={1}>
<Card className={classes.card}>

    <CardActionArea>
    <CardMedia className={classes.cardMedia} image={projectImage} title={projectTitle}/>

    <CardContent>
          <Typography align={'center'}gutterBottom variant="h5" component="h2">
          {projectTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              {description}
          </Typography>
        </CardContent>

    </CardActionArea>
    </Card>
    </Grid>
    

    )
}

export default PortfilioCard;