import {Link} from 'react-router-dom';
import React, { useState } from 'react';




function Header (){
    return (
        <React.Fragment>
            <h1>My Bookcase</h1> 
            <Link to="/pages/Hom"> Home</Link>
            <Link to="/pages/About">About</Link>
            <Link to="/pages/Nw">New Adventure</Link>
            <Link to="/pages/Best">Best Reads</Link>
            <Link to="/bookcase" className="bookLink"> Bookcase</Link>
            </React.Fragment>
        )


}

export default Header