import React, {FC} from 'react';
import {timeStart} from "./HeaderSelector";

interface IResultComponent {
    value:string;
    time:any,
}

const ResultComponent:FC<IResultComponent> = ({value,time}) => {
    const status = 200;
    const timeCount = time - timeStart;
    return (
        <div>
            <div className="Result_Title">
               <div className="left">Result</div>
                {
                    value != ''
                    &&
                    <div className="right">
                        <div>Status: <span>{status} OK</span></div>
                        <div>Time: <span>{timeCount} ms</span></div>
                    </div>
                }
            </div>
            <div className="textArea" style={{marginTop:"20px"}}>
                <textarea name="textArea" value={value}/>
            </div>
        </div>
    );
};

export default ResultComponent;