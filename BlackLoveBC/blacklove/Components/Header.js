import {Link} from 'react-router-dom';
import React, { useState } from 'react';


function Header (){
    return (
        <React.Fragment>
            <h1>BlackLove Bookcase App</h1> 
            <Link to="/Pages/Home">Home</Link>
            <Link to="/.Pages/About">About Use</Link>
            <Link to="/.Pages/New">New Adventures</Link>
            <Link to="/.Pages/BestReads">BestReads</Link>
            <Link to="/bookcase" className="bookLink"> Bookcase</Link>
            <
            </React.Fragment>
        )


}

export default Header