import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import SkillRating from './components/SkillRating';


const App = () => {


    return (

        <React.Fragment >
            <Navbar />
            <Home />
        </React.Fragment>
    )
}

export default App;