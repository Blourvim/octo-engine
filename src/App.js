import React from 'react';
import Footer from './components/Footer.js';
import Introduction from './components/introduction/Introduction.js';
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