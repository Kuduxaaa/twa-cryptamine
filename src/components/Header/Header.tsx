import {TonConnectButton} from "@tonconnect/ui-react";
import './header.css';

export const Header = () => {
    return <header>
        <span>Cryptamine</span>
        <TonConnectButton />
    </header>
}