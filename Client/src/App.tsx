import React, {useEffect, useState} from 'react';
import './App.css';
import HeaderSelector from "./Components/HeaderSelector";
import ResultComponent from "./Components/ResultComponent";
import {io} from "socket.io-client";

const URL = 'http://localhost:1040';
export const socket = io(URL);

function App() {
    const [value, setValue] = useState<{ value:string, time:any }>({value:'',time:0});
    useEffect(() => {
        socket.on("connect", () => {});
        socket.on("result", (value:string) => {
            const time = Date.now();
            setValue({value,time});
            //console.log(`time end: ${time}`)
        });
    }, []);
    return (
        <div className="App">
            <div className="App__Container">
                <HeaderSelector/>
                <ResultComponent value={value.value} time={value.time} />
            </div>
        </div>
    );
}

export default App;
