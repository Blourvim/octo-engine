import React  from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import WebIcon from '@material-ui/icons/Web';
import GitHubIcon from '@material-ui/icons/GitHub';
const useStyles =makeStyles({
    cardMedia:{
        height:'200px',
    },
    card:{
        backgroundColor:'#ADB5BD',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius:'10px',
        color:'#2F5D62',
    },
    cardConent:{
        color:'#222'

    },
    grid:{
        margin:'13px'
    },
    icon:{
        color:'#212529',
       
    },
    description:{
        color:'#222',
        padding:'12px'
    },
    title:{
        fontWeight:'bold'

    },
    button:{
        '&:hover': {
            background: "#caded7",
         },
    }

})
const PortfilioCard = (props)=>{

const classes = useStyles()
const {description,projectImage,link,githubLink,projectTitle} = props
    return(
        <Grid className={classes.grid}item xs={9} sm={5}md={3} >
<Card className={classes.card}>

    <CardContent >
          <Typography className={classes.title}align={'center'}gutterBottom variant="h5" component="h2">
          {projectTitle}
          </Typography>
          <Typography variant="body2" className={classes.description} component="p">
              {description}
          </Typography>
        </CardContent>

    <CardActions>
        <Button className={classes.button}size="small" color="primary" target="_blank" href={githubLink}>
          <GitHubIcon className={classes.icon}/>
        </Button>
        <Button  className={classes.button} size="small" color="primary" target="_blank" href={link}>
<WebIcon className={classes.icon}/>
        </Button>
      </CardActions>

    </Card>
    </Grid>
    

    )
}

export default PortfilioCard;