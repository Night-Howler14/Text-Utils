import React, {useState} from "react";

export default function TextForm(props){
    const handleUpClick1=()=>{
        // console.log("Button is clicked");
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase! ", "success");
    }
    const handleUpClick2=()=>{
        // console.log("Button is clicked");
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase! ", "success");
    }
    const handleOnChange=(event)=>{
        // console.log("changing the value of the text");
        setText(event.target.value);
    }
    const handletoClear=()=>{
        // console.log("clear the textarea");
        setText("");
        props.showAlert("Cleared successfully!  ", "success");
    }

    const handletogap=()=>{
        // console.log("Remove unwanted gaps");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are Removed! ", "success");
    }
    const handleCopy=()=>{
      const ctext=document.getElementById("myBox");
      ctext.select();
      navigator.clipboard.writeText(ctext.value);
      props.showAlert("Copied to clipboard successfully!  ", "success");
    }

    const [text,setText]=useState('Enter the text here')
    // text="new text" ; wrong way to change
    //  setText("new text") ; 
    return(
        <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick1}>Convert to Uppercase</button>

    <button className="btn btn-primary mx-1" onClick={handleUpClick2}>Convert to Lowercase</button>

    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>

    <button className="btn btn-primary mx-1" onClick={handletogap}>Remove Extra Space</button>

    <button className="btn btn-primary mx-1" onClick={handletoClear}>Clear</button>
    
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>

        <h2>
            Preview
        </h2>
        <p>{text.length>0?text:"!! Enter something to preview here !!"}</p>
    </div>
    </>
    )
}    