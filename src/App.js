import React from 'react';
import Footer from './components/Footer.js';
import Introduction from './components/Introduction.js';

const App = () => {


    return (

        <React.Fragment >

            <Introduction/>
            <Footer place={'bottomNavContainer'}/>

    </React.Fragment>
    )
}

export default App;