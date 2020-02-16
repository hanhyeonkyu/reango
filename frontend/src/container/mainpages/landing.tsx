import React from 'react'
import {Link} from 'react-router-dom'
import './landing.scss'

function landing() {
    return (
        <div className="landing">
            <div className="contents">
                <div className="title">LANDING PAGE</div>
                <div className="subtitle">Vector background</div>
                <Link to="/about"><button className="action">ENTER SITE</button></Link>
            </div>
        </div>
    );
}

export default landing;