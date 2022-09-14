import React, { useState } from "react";

export default function TextForm(props) {
    // using useState
    const [text, setText] = useState("");

    // function for onclick and convert them to uppercase
    const handleUpClick = () => {
        // console.log(text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to UpperCase", "Successfully")
    };
    // function to write in the text area
    const handleOnChange = (event) => {
        setText(event.target.value);
        // console.log("onchange")
    };
    // Function to convert text into LowerCase
    const handleLoClick = () => {
        // console.log(text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to LowerCase", "Successfully")

    };
    // Function to clear text
    const handleClear = () => {
        setText("");
    };
    return (
        <>
        
            <div className=" container mb-3">
                <h2 className=" mt-3 mb-3">{props.text}</h2>
                <textarea
                    className="form-control textArea  "
                    id="myBox"
                    rows="5"
                    
                    value={text}
                    onChange={handleOnChange}
                    style={props.mode==='dark'?{
                        backgroundColor:'gray',
                        color:'white'
                    }:{
                        backgroundColor:'white',
                        color:'Black'
                    }}
                ></textarea>
                <button
                    type="button"
                    className="btn btn-outline-primary mt-4 "
                    onClick={handleUpClick}
                >
                    Convert to Uppercase
                </button>
                <button
                    type="button"
                    className="btn btn-outline-primary mt-4 mx-3 "
                    onClick={handleLoClick}
                >
                    Convert to Lowercase
                </button>
                <button
                    type="button"
                    className="btn btn-outline-primary mt-4 mx-1 "
                    onClick={handleClear}
                >
                    Clear
                </button>
            </div>
            <div className="container my-3">
                <h1>Your Text Summary  </h1>
                <p>
                    There are {text.split(" ").length - 1} words and {text.length}{" "}
                    characters
                </p>
                <p> {Math.abs(0.008 * (text.split(" ").length - 1))} Minutes read</p>
                <h3>Preview </h3>
                <p>{text.length===0?"Enter your text above in the box to preview here" :text}</p>
            </div>
        </>
    );
}
