import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles'; 
import background from './pexels-pixabay-39584.jpg';
import  Avatar from '@material-ui/core/Avatar';
import Footer from './Footer';
const useStyles = makeStyles({
    home:{
        color:'#222',
        textAlign:'center',
        paddingTop:'7rem',
    },
    background:{
        backgroundImage:`url(${background})`,
        backgroundSize:'cover',
        height:'40rem',
        overflowY: 'hidden',
        overFlowX: 'hidden'

        
        },
    box:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        overflowY: 'hidden',
        overFlowX: 'hidden'
    },
    avatar:{
        height:'10rem',
        width:'10rem',
        display:'flex',

    }

})

const Home = ()=>{
    const classes = useStyles()

return(<div className={classes.background}>


<Typography variant={'h1'}className={classes.home}>Mert Yıldız</Typography>
<div className={classes.box}>
<Avatar  alt={'none'} className={classes.avatar} src={'https://avatars.githubusercontent.com/u/71990861?v=4'}/>

<Footer/>
</div>
</div>
)
}

export default Home;