import React, {useState} from "react";


export default function TextForm(props){
    const handleUpClick=() =>{
        console.log("uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick=() =>{
        console.log("lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success");
    }
    const handleOnChange=(event) =>{
        console.log("on change");
        setText(event.target.value);
    }
    const handleOnCopy=() =>{
        var text= document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success");
    }
    const handleExtraSpaces=() =>{
        let newText= text.split(/[  ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces Removed","success");
    }
    const [text, setText]= useState('Enter your text here')
    return(
        <>
        <div className="container"  style={{color: props.mode==='dark'? 'white':'black'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lower case</button>
            <button className="btn btn-primary mx-2" onClick={handleOnCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Extra Space</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'? 'white':'black'}}> 
            <h1>Text summary here</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}