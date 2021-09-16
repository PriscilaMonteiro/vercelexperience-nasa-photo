import React from"react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top"/></a>
                    <div className="container" >
                        <div className="navbar-nav">
                            
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/nasaphoto">APOD</Link>
                            <Link className="nav-link" to="/searchnasaphoto">Search</Link>
                           
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}