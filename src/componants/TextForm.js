
import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick=()=>{
       // console.log("button Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handlelowClick=()=>{
        // console.log("button Clicked" + text);
         let newText = text.toLowerCase();
         setText(newText);
         props.showAlert("Convertered to Lowercase","success") 
     }

     const handleclearClick=()=>{
        // console.log("button Clicked" + text);
         let newText ="";
         setText(newText);
         props.showAlert(" text area has been cleared","success")
         
     }


     const handlecopyClick=()=>{
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(text.value);
        props.showAlert(" copied to clipboard","success")
     }


     const handleExtraspaces=()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(""));
        props.showAlert("Extra spae has been removed","success")
     }
  
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState(" ");

    return (
       <> 
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
    
    <textarea className="form-control" id="myBox"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#20426c':'white',
       color:props.mode==='dark'?'white':'black'}} rows="8">

    </textarea>
    </div>
    <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handlecopyClick}>Copy</button>
    <button className="btn btn-primary" onClick={handleExtraspaces}>Remove Extra Spaces</button>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summery</h1>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
        </>
    )
}
