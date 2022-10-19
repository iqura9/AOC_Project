import React, {FC} from 'react';

interface IResultComponent {
    value:string;
}

const ResultComponent:FC<IResultComponent> = ({value}) => {
    const status = 200;
    const time = 133;
    return (
        <div>
            <div className="Result_Title">
               <div className="left">Result</div>
                <div className="right">
                    <div>Status: <span>{status} OK</span></div>
                    <div>Time: <span>{time} ms</span></div>
                </div>
            </div>
            <div className="textArea" style={{marginTop:"20px"}}>
                <textarea name="textArea" value={value}/>
            </div>
        </div>
    );
};

export default ResultComponent;