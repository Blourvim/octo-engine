import React from 'react';
import Footer from './components/Footer.js';
import Introduction from './components/Introduction.js';
import MySkills from './components/MySkills.js';
import {Divider} from '@material-ui/core'
import PortfilioContainer from './components/PortfilioContainer.js';
const App = () => {


    return (

        <React.Fragment >

            <Introduction/>
<PortfilioContainer/>

<MySkills/>
            <Footer place={'bottomNavContainer'}/>

    </React.Fragment>
    )
}

export default App;