import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import background from './pexels-pixabay-39584.jpg';
import Avatar from '@material-ui/core/Avatar';
import Footer from './Footer';
import useMediaQuery from '@material-ui/core/useMediaQuery';



const useStyles = makeStyles({
    homeMobile: {
        fontSize: '12vw',
        color: 'white',
        WebkitTextStrokeColor: 'black',
        WebkitTextStrokeWidth: '1px',
        position: 'absolute',
        transform: 'translate(-50%,-50%)',
        right: '-10%',
        top: '20%',


    },
    home: {
        color:  'white',
        fontSize: '6vw',
        WebkitTextStrokeColor: 'black',
        WebkitTextStrokeWidth: '1px',
        position: 'absolute',
        transform: 'translate(-50%,-50%)',
        left: '50%',
        top: '28%',


    },
    background: {
        display:'flex',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        height: '90vh',
        alignItems: 'center',
        background: 'no-repeat',
        backgroundColor: '#C7A993'

    },
    backgroundMobile: {
        backgroundImage: `url(${background})`,
        backgroundSize: '1000px',
        backgroundPosition: 'bottom',
        height: '80vh',
        alignItems: 'center',
        background: 'no-repeat',
        backgroundColor: '#C7A993',
     

    },
    box: {
        alignItems:'center',
        display: 'inline-block',
        minWidth: '25rem',
        position: 'absolute',
        transform: 'translate(-50%,-50%)',
        left: '50%',
        top: '50%'
    },
    boxMobile: {
        display: 'inline-block',
        width: '26rem',
        position: 'absolute',
        transform: 'translate(-50%,-50%)',
        left: '40%',
        top: '30%'
    },
    avatar: {
        width: '160px',
        height: '160px',
        float: 'left'
    }

})

const Home = () => {

    const [keyDrawer, setKeyDrawer] = useState(false);
    const openKey = () => {
        setKeyDrawer(!keyDrawer)

    }

    const classes = useStyles()
    const matches = useMediaQuery('(min-width:600px)');

    const homeText = matches?  classes.home:classes.homeMobile;
    const homeBox = matches?  classes.box:classes.boxMobile;
    const homeBackground = matches?  classes.background:classes.backgroundMobile;



    return (
        <div id='Home'className={homeBackground}>

            <Typography variant={'h1'} className={homeText}>Mert Yıldız</Typography>

            <div className={homeBox}>


                <Avatar alt={'none'} className={classes.avatar} src={'https://avatars.githubusercontent.com/u/71990861?v=4'} />

                <Footer place={'home'} />
                <button onClick={() => { openKey() }}>x</button>
                {keyDrawer && <div>secret</div>}
            </div>
        </div>
    )
}

export default Home;