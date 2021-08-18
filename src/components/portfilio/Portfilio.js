import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PortfilioContainer from './PortfilioContainer';
import Divider from '@material-ui/core/Divider';
import {ReactIcon,JavascriptIcon,MaterialUIIcon,NodeJSIcon,MongoDBIcon} from '../../svg-repository/Icons';
import Fade from 'react-reveal/Fade';


const useStyles = makeStyles({

backgroundContainer:{
    maxWidth:'100%',
    marginLeft:'0px',
    marginRight:'0px',
    overflowX:'hidden',
    padding:0,

}

});


const Portfilio =()=>{
   const classes= useStyles();


return(<div id='Portfilio'className={classes.backgroundContainer}>


{[
    {
     title:'My Portfilio Website',
     description:'For this website I used React and Material UI to create a simplistic fully responsive website to display my works. ',
     link:'https://blourvim.github.io/octo-engine/',
     image:'https://picsum.photos/200/300',
     githubLink:'https://github.com/Blourvim/octo-engine',
     icons:[<ReactIcon/>,<JavascriptIcon/>,<MaterialUIIcon/>


        
     ],
    },
    {
        title:'Anime Search Bar',
        description:'A website that I plan to keep working on in the future. It is a simple anime search that utilizes a public API to make calls while displaying the results the code has a rough back-end in the developement branch, that I have scrapped for now.',
        link:'https://blourvim.github.io/friendly-potato/',
        image:'https://picsum.photos/200/300',
        githubLink:'https://github.com/Blourvim/friendly-potato',
     icons:[<ReactIcon/>,<JavascriptIcon/>,<MaterialUIIcon/>
     ],

       },
       {
        title:'Paw Paw Mewdia',
        description:"My social network  that features a secure authentication and autherization flow, connects to a database, and allows users to interract",
        link:'https://paw-paw-mewdia.herokuapp.com',
        image:'https://picsum.photos/200/300',
        githubLink:'https://github.com/Blourvim/octo-engine',
     icons:[<ReactIcon/>,<JavascriptIcon/>,<MaterialUIIcon/>,<NodeJSIcon/>,<MongoDBIcon/>     ],

       }
    ].map((item,index)=>(
        <Fade>
        <PortfilioContainer
                        key={item.githubLink}
                       title={item.title}
                       description={item.description}
                       link={item.link}
                       image={item.image}
                       githubLink={item.githubLink}
                       index={index}
                       icons={item.icons}
                       />
                       <Divider/>
                       </Fade>


    ))}
</div>)

}

export default Portfilio;