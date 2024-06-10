import "./home.css"
import React from 'react';

const Home = () => {
    return (
        <div className='home'>
            <h1>Home</h1>

            <div className="clicker">
                <img draggable="false" src="logo-circle.png" className='clicker-image' alt="Cryptamine" />
            </div>
        </div>
    );
};

export default Home;
