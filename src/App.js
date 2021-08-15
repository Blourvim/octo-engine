import React from 'react';
import Footer from './components/Footer.js';
import Introduction from './components/Introduction.js';
import MySkills from './components/MySkills.js';
import {Divider} from '@material-ui/core'
const App = () => {


    return (

        <React.Fragment >

            <Introduction/>
<MySkills/>
            <Footer place={'bottomNavContainer'}/>

    </React.Fragment>
    )
}

export default App;