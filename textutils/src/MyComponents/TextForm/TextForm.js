import React, { useState } from 'react'

function TextForm(props) {

    const [text, setText] = useState('');

    const handleUppercaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowercaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearAllTextClick = () => {
        setText(""); 
    }

    const handleTextOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div className="p-2" style={{ "height": "1000px" }}>
            <div className={`container flex justify-content-center py-5 my-lg-5 rounded-3 shadow-lg bg-${props.bgmode === 'dark' ? 'light' : 'white'}`}>
                <div className="fs-1 text-warning text-center"><span className="border-bottom border-5 border-warning">{props.title}</span></div>
                <div className="container flex justify-content-center px-5">
                    <textarea rows={5} className=" container py-2 my-5 form-control bg-white" value={text} onChange={handleTextOnChange} placeholder="Enter the text here....."></textarea>
                    <div className="row mt-lg-5 mt-4 mt-md-5 gap-2 justify-content-center">
                        <button onClick={handleUppercaseClick} className={`w-auto text-wrap btn btn-warning p-2 px-5 fw-bold text-white text-uppercase ${text.length === 0 ? 'disabled' : ''}`}>uppercase</button>
                        <button onClick={handleLowercaseClick} className={`w-auto text-wrap btn btn-warning p-2 px-5 fw-bold text-white text-uppercase ${text.length === 0 ? 'disabled' : ''}`}>lowercase</button>
                        <button onClick={handleClearAllTextClick} className={`w-auto text-wrap btn btn-warning p-2 px-5 fw-bold text-white text-uppercase ${text.length === 0 ? 'disabled' : ''}`}>clear all text</button>
                    </div>
                </div>
                <div className="container p-5 fs-4">
                    <h1 className={`border border-4 border-bottom-0 border-top-0 border-warning bg-light px-4 py-2 ${props.bgmode === 'dark' ? 'bg-white' : ' '}`}>Text Summary</h1>
                    <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                    <p>{0.008 * (text.split(" ").length)} minutes read</p>
                    <h1 className={`border border-4 border-bottom-0 border-top-0 border-warning bg-light px-4 py-2 ${props.bgmode === 'dark' ? 'bg-white' : ' '}`}>Preview Text</h1>
                    <p>{text.length === 0 ? 'Enter the text in textbox...' : text}</p>
                </div>
            </div>
        </div>
    )
}

export default TextForm