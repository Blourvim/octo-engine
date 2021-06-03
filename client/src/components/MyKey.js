import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Avatar from '@material-ui/core/Avatar';
import Footer from './Footer';
import useMediaQuery from '@material-ui/core/useMediaQuery';



const useStyles = makeStyles({
 

    box: {
        alignItems:'center',
        display: 'inline-block',
        minWidth: '25rem',
        position: 'absolute',
        transform: 'translate(-50%,-50%)',
        left: '50%',
        top: '600%'
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

const MyKey = () => {


    const classes = useStyles()
    const matches = useMediaQuery('(min-width:600px)');

    const homeBox = matches?  classes.box:classes.boxMobile;



    return (



            <div className={homeBox}>


                <Avatar alt={'none'} className={classes.avatar} src={'https://avatars.githubusercontent.com/u/71990861?v=4'} />

                <Footer place={'home'} />

            </div>
    )
}

export default MyKey;