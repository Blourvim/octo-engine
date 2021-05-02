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
        right: '-25%',
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
        height: '100vh',
        alignItems: 'center',
        background: 'no-repeat',
        backgroundColor: '#C7A993',
        overflowX:'hidden',
        overflowY:'hidden',

    },
    box: {
        display: 'inline-block',
        minWidth: '25rem',
        position: 'absolute',
        transform: 'translate(-50%,-50%)',
        left: '50%',
        top: '50%'
    },
    boxMobile: {
        display: 'inline-block',
        minWidth: '25rem',
        position: 'absolute',
        transform: 'translate(-50%,-50%)',
        left: '50%',
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
        <div className={homeBackground}>

            <Typography variant={'h1'} className={homeText}>Mert Yıldız</Typography>

            <div className={homeBox}>


                <Avatar alt={'none'} className={classes.avatar} src={'https://avatars.githubusercontent.com/u/71990861?v=4'} />

                <Footer place={'home'} />
                <button onClick={() => { openKey() }}>x</button>
                {keyDrawer && <div>lorem imsum dolor sit amet zxcsacx adljg aspwezx aweqwşl zxcşsjd  ksljd</div>}
                <p>Programmer</p>
            </div>
        </div>
    )
}

export default Home;