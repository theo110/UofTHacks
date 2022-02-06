import React, { useState, useEffect, } from 'react';
import ReactDOM from 'react-dom';
// import HomePage from "./HomePage";
// import './Home.css' 
import Button from '../Button'
import logo from '../background.png'
import HomePage from './HomePage'

function Home(props) {

    return (
        <>
            <h1 style = {{textAlign:"center"}}>Welcome</h1>
            
            <img src = {logo} alt = "Logo" height="650px" width="100%"/>;
            <Button/>
            <HomePage/>
            <p>
            During this long pandemic period, our lifestyles have met massive disruptions.
            Fitness centers, sports programs, and many physical activities were shut down.
            Were were forced to stay at home. With limited physical activities, our mental
            and physical health were greatly impacted by this change. Heath problems such
            as obesity, depression, and anxiety dramatically increased during this time.</p>

        <p>In order to combat and restore life before the pandemic, we created Fit.Me,
            an app that allows you to find activity centers and programs near you that
            satisfy your health goals. We incorporated an extremely fine search system that
            gives you information about the different sports and fitness facilities that
            are covid-safe and open for you! Just specify your preferences, find an activity,
            and become one step closer to maintaining a health lifestyle.</p>
        </> 
        
        )
}

export default Home;