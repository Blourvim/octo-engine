import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles'; 
import background from './pexels-pixabay-39584.jpg';
import  Avatar from '@material-ui/core/Avatar';
import Footer from './Footer';
const useStyles = makeStyles({
    home:{
        color:'white',
        paddingTop:'4rem',
        marginLeft:'30%',
        WebkitTextStrokeColor:'black',
        WebkitTextStrokeWidth:'1px'


    },
    background:{
        backgroundImage:`url(${background})`,
        backgroundSize:'100%',
        backgroundPosition:'bottom',
        minHeight:'100vh',
        height:'100vh',
        alignItems:'center',
        

        
        },
    box:{     
    width:'25rem',
    display:'inline-block',
    alignSelf:'center',
    marginLeft:'25rem'

    },
    avatar:{
        height:'10rem',
        width:'10rem',
        float:'left'
          },
    fooster:{
        float:'left',
        display:'flex',
        margin:'50px',
        backgroundColor:'red'
       }

})

const Home = ()=>{
    const classes = useStyles()

return(
<div className={classes.background}>
<Typography variant={'h1'}className={classes.home}>Mert Yıldız</Typography>


<div className={classes.box}>
    
<Avatar  alt={'none'} className={classes.avatar} src={'https://avatars.githubusercontent.com/u/71990861?v=4'}/>

<Footer place={'home'}/>
</div>
</div>
)
}

export default Home;