import React from 'react';
import Footer from './components/Footer.js';
import Introduction from './components/Introduction.js';
import MySkills from './components/MySkills.js';
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