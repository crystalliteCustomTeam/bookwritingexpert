import { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';


function App() {
    const tawkMessengerRef = useRef();

    const handleMinimize () => {
        tawkMessengerRef.current.minimize();
    };

    return (
        <div className="App">
            <button onClick={handleMinimize}> Minimize the Chat </button>

            <TawkMessengerReact
                propertyId="678eb3553a8427326071da6b"
                widgetId="1ii2mp2bs"
                ref={tawkMessengerRef}/>
        </div>
    );
}