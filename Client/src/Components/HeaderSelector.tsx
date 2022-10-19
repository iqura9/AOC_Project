import React, {FC, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import './HeaderSelection.scss';
import {socket} from "../App";

const imgx = require('./../img/Components/Icon/Upload.png')
const pie = require('./../img/Components/Icon/pie.png')

const sortKeys = ['Default', 'Asc', 'Des', 'Low count first', 'A lot of count first', 'Reverse'];
const splitKeys = [
    {
        desc: 'Space',
        value: ' ',
    },
    {
        desc: 'Coma',
        value: ',',
    },
    {
        desc: 'Dot',
        value: '.',
    },
    {
        desc: 'Semicolon',
        value: ';',
    },
];
export let timeStart = 0;

const HeaderSelector = () => {
    const [img, setImg] = useState<any>(null);
    const [radio, setRad] = useState("");
    const [selectedFile, setSelectedFile] = useState<any>(null);
    const [value, setValue] = useState<any>('');
    const form = useForm({
        defaultValues: {
            radioHeader: "0",
            sorkKey: "default",
            splitKey: "default",
            joinKey: "default",
            textArea: "",
            reg: false,
            file: null,
        },
        mode: "onChange"
    });
    const {register} = form;

    useEffect(() => {
        setRad(form.watch().radioHeader);
        setSelectedFile(null);
    }, [form.watch().radioHeader])

    useEffect(() => {
        send();
    }, [form.watch().sorkKey, form.watch().splitKey, form.watch().joinKey, form.watch().reg])

    const send = (event?: any, value?: any) => {
        event?.preventDefault()
        let str = form.watch().textArea;
        if (value && radio == '1') str = value;
        let key = form.watch().sorkKey;
        let split = form.watch().splitKey;
        let join = form.watch().joinKey;
        let register = !form.watch().reg;
        if (str?.length > 0 && key != 'default' && split != 'default' && join != 'default') {
            const Data = {str, key, split, join, register,}
            timeStart = Date.now();
            socket.emit('updateString', Data);
        }
    }

    const changeHandler = (event: any) => {
        event.preventDefault();
        var fr = new FileReader();
        fr.onload = () => {
        }
        fr.onloadend = () => {
            if (fr.result) {
                send(undefined, fr.result)
            }
        }
        fr.readAsText(selectedFile[0]);
    }

    function upload(files: any) {
        socket.emit("upload", (files[0]));
    }

    return (
        <div className="Header_Selectors">
            <form>
                <div className="toggle">
                    <input {...register("radioHeader")}
                           type="radio" value="0" id="text" checked={radio == '0'} defaultChecked={true}/>
                    <label htmlFor="text">Text</label>
                    <input {...register("radioHeader")}
                           type="radio" value="1" id="file" checked={radio == '1'}/>
                    <label htmlFor="file">File .txt</label>
                </div>
                <div className="selector">
                    <select {...register("sorkKey")} required={true}>
                        <option selected disabled value='default'>
                            Chose sort key
                        </option>
                        {sortKeys.map((m, index) => {
                            return <option key={index} value={m}>{m}</option>
                        })}
                    </select>
                    <select {...register("splitKey")} required={true}>
                        <option selected disabled value='default'>
                            Chose split key
                        </option>
                        {splitKeys.map(({desc, value}, index) => {
                            return <option key={index} value={value}>{desc}</option>
                        })}
                    </select>
                    <select {...register("joinKey")} required={true}>
                        <option selected disabled value='default'>
                            Chose join key
                        </option>
                        {splitKeys.map(({desc, value}, index) => {
                            return <option key={index} value={value}>{desc}</option>
                        })}
                    </select>
                </div>
                <div className="register">
                    <span>Ignore Register</span>
                    <input type={"checkbox"} {...register('reg')}/>
                </div>
                {
                    radio == '0' && <>
                        <div className="textArea">
                        <textarea {...register('textArea')} required={true}
                                  placeholder="Type..."
                                  name="textArea"
                        />
                        </div>
                        <div className="low_align">
                            <button type={'submit'} onClick={send}>Send to the server</button>
                        </div>
                    </>
                }
                {
                    radio == '1' && <>
                        <div className='Align_row'>
                            <div>
                                <input id={'file-upload'} type="file" onChange={(e) => setSelectedFile(e?.target?.files)}/>
                            </div>
                            <label htmlFor="file-upload" className="custom-file-upload">
                                {!selectedFile ? <>
                                        <img src={imgx} alt=""/>
                                        <div>
                                            Add .txt File
                                        </div>
                                    </> :
                                    <div className='easyIn'>
                                        <img src={pie} alt=""/>
                                        <div>
                                            Upload Complete!
                                        </div>
                                    </div>
                                }
                            </label>
                        </div>
                        <div className="low_align al">
                            <button onClick={changeHandler}>Send</button>
                        </div>
                    </>
                }
            </form>
        </div>
    );
};

export default HeaderSelector;