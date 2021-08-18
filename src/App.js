import React from 'react';
import Footer from './components/Footer.js';
import Introduction from './components/Introduction.js';
import MySkills from './components/MySkills.js';
import Portfilio from './components/portfilio/Portfilio.js';

const App = () => {


    return (

        <React.Fragment >

            <Introduction/>
<Portfilio/>

            <Footer place={'bottomNavContainer'}/>

    </React.Fragment>
    )
}

export default App;