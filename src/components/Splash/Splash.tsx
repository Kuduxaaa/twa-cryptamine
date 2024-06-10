import './splash.css';

import React, { useState, useEffect } from 'react';

interface SplashProps {
    onLoaded: () => void;
}

const Splash: React.FC<SplashProps> = ({ onLoaded }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            onLoaded();
        }, 2000);

        return () => clearTimeout(timer);
    }, [onLoaded]);

    if (isLoading) {
        return (<div className='splash'>
            <span className="loader"></span>
            <div className='loader-wrapper'>
                <img src="/logo-circle.png" draggable="false" alt="Cryptamine" className='logo-image' />
                <p className='title'>Cryptamine</p>
                <p>Please wait...</p>
            </div>
        </div>
        );
    }

    return null;
};

export default Splash;
