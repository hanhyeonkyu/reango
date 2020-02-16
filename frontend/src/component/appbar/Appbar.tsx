import React from 'react'
import {Link} from 'react-router-dom'
import './Appbar.scss'

function Appbar() {
    return (
        <div className="header">
            <div className="header-horizontal-line" />
            <div className="header-contents">
                <Link to="/"><img className="logo-image" src="/assets/img/ijdesignheader3.png" alt="" /></Link>
                <div className="navdiv">
                    <Link to="/about"><button className="nav-button">about</button></Link>
                    <Link to="/work"><button className="nav-button">work</button></Link>
                    <Link to="/gold"><button className="nav-button">gold</button></Link>
                    <Link to="/life"><button className="nav-button">life</button></Link>
                    <Link to="/easy"><button className="nav-button">easy</button></Link>
                </div>
            </div>
            <div className="header-horizontal-line" />
        </div>
    );
}

export default Appbar;