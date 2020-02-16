import React from 'react'
import HomeRoutes from '../../layout/HomeRoutes'
import Appbar from '../../component/appbar/Appbar'
import './Home.scss'

function Home() {
    return (
        <div className="Home">
            <Appbar />
            <div className="maindiv">
                <HomeRoutes />
            </div>
            <div className="footer">if you hava a question. ask me. this is my github.{'\t'}
                <a href='https://github.com/hanhyeonkyu'>https://github.com/hanhyeonkyu</a>
                {'\t'}😎
            </div>
        </div>
    );
}

export default Home;