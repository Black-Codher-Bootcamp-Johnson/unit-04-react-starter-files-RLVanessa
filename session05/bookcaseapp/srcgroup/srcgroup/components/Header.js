import {Link} from 'react-router-dom';
import React, { useState } from 'react';




function Header (){
    return (
        <React.Fragment>
            <h1>My Bookcase</h1> 
            <Link to="/"> Home </Link>
            <Link to="/bookcase" className="bookLink"> Bookcase</Link>
            </React.Fragment>
        )


}

export default Header