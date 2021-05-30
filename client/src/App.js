import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Portfilio from './components/Portfilio.js'
import Footer from './components/Footer.js';
import HamburgerNav from './components/HamburgerNav.js';


const App = () => {


    return (

        <React.Fragment >
            <HamburgerNav/>
            <Navbar/>
            <Home />
            <Portfilio />
            <AboutMe/>
            <Contact/>
            <Footer place={'bottomNavContainer'}/>
    </React.Fragment>
    )
}

export default App;