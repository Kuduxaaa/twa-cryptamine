import './App.css';
import { THEME, TonConnectUIProvider, useTonAddress } from "@tonconnect/ui-react";
import { Header } from "./components/Header/Header";
import BottomMenu from './components/BottomBar/BottomMenu';
import Splash from "./components/Splash/Splash";
import Login from "./components/Login/Login";
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

import Home from './views/Home/Home';
import Friends from './views/Friends/Friends';
import Tasks from './views/Tasks/Tasks';
import Items from './views/Items/Items';

const App: React.FC = () => {
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const tonAddress = useTonAddress();  // Use the hook at the top level of your component

    const handleDataLoaded = () => {
        setIsDataLoaded(true);
    };

    return (
        <TonConnectUIProvider
            manifestUrl="/manifest.json"
            uiPreferences={{ theme: THEME.DARK }}
            actionsConfiguration={{
                twaReturnUrl: 'https://t.me/cryptamine/start'
            }}
        >
            <Router>
                <div className="app">
                    {!isDataLoaded && <Splash onLoaded={handleDataLoaded} />}
                    {isDataLoaded && tonAddress &&
                        <div className='main'>
                            <Header />
                            <div className="page-content">
                                <Routes>
                                    <Route path="/home" Component={Home} />
                                    <Route path="/friends" Component={Friends} />
                                    <Route path="/tasks" Component={Tasks} />
                                    <Route path="/items" Component={Items} />
                                    <Route path="/" Component={Home} /> {/* Default route */}
                                </Routes>
                            </div>
                            <BottomMenu />
                        </div>
                    }
                    {isDataLoaded && !tonAddress &&
                        <div>
                            <Login />
                        </div>
                    }
                </div>
            </Router>
        </TonConnectUIProvider>
    );
}

export default App;
