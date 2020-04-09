import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NotFound extends Component{
    render(){
        return(
            <React.Fragment>
                <h1 className="NotFound">404</h1>
                <p className="Error">This page doesnt't exist, make sure you spelled the webpage correctly and that you are connected to the internet.</p>
                <button
                    onClick={<NavLink to="/"/>}
                >Return to Home</button>
            </React.Fragment>
        )
    }
}
export default NotFound;