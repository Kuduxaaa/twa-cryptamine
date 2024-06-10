import './App.css';
import { THEME, TonConnectUIProvider } from "@tonconnect/ui-react";
import { Header } from "./components/Header/Header";
import Splash from "./components/Splash/Splash";
import React, { useState } from 'react';

const App: React.FC = () => {
    const [isDataLoaded, setIsDataLoaded] = useState(false);

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
            <div className="app">
                {!isDataLoaded && <Splash onLoaded={handleDataLoaded} />}
                {isDataLoaded && <Header />}
            </div>
        </TonConnectUIProvider>
    );
}

export default App;
