import './login.css';

import { Button } from '../styled/styled';
import { TonConnectUIProvider, useTonConnectUI } from '@tonconnect/ui-react';


const Login = () => {
    const [tonConnectUI, setOptions] = useTonConnectUI();
    const connectWallet = () => {
        tonConnectUI.connectWallet()
    }

    return (
        <TonConnectUIProvider>
            <div className='login'>
                <div className='text-area'>
                    <h1 className='mt-4'>Hey bro 👋 </h1>
                    <h1>Looks like you are not connected.</h1>
                    <h2 className='mt-4 text-muted'>Man connect us if you want to continue</h2>
                </div>
                <Button style={{position: 'absolute', left:0, bottom: 0, width: '100%'}} onClick={connectWallet}>Continue to Cryptamine 🤑💊</Button>
            </div>
        </TonConnectUIProvider>
    );
};

export default Login;