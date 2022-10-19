import React, {useEffect, useState} from 'react';
import './App.css';
import HeaderSelector from "./Components/HeaderSelector";
import ResultComponent from "./Components/ResultComponent";
import {io} from "socket.io-client";

const ENDPOINT = 'http://localhost:1040';
export const socket = io(ENDPOINT);

function App() {

    const [value, setValue] = useState<string>('');
    useEffect(() => {

        socket.on("connect", () => {});

        socket.on("result", (val:string) => {
            setValue(val);
        });
    }, []);
    return (
        <div className="App">
            <div className="App__Container">
                <HeaderSelector/>
                <ResultComponent value={value}/>
            </div>

        </div>
    );
}

export default App;
