import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase was clicked");
        if(text.length > 0){
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to uppercase", "success");
        }
        else{
            props.showAlert("Please Enter text", "danger");
        }
    }
    const handleLowClick = () => {
        // console.log("lowercase was clicked");
        if(text.length > 0){
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to lowercase", "success");
        }
        else{
            props.showAlert("Please Enter text", "danger");
        }
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleCLearText = () => {
        // console.log("text cleared");
        if(text.length > 0){
            setText("");
            props.showAlert("Text cleared", "danger");
        }
        else{
            props.showAlert("Please Enter text", "danger");
        }
    }
    const handleCopy = () => {
        // console.log("I am a Copy");
        if(text.length > 0){
            let text = document.getElementById("mybox");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Text copied", "primary");
        }
        else{
            props.showAlert("Please Enter text", "danger");
        }
    }
    const handleExtraSpaces = () => {
        if(text.length > 0){
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("Extra spaces removed", "primary");
        }
        else{
            props.showAlert("Please Enter text", "danger");
        }
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
                </div>
                <button className="btn btn-primary m-3" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary m-3" onClick={handleLowClick}>Convert to LoweCase</button>
                <button className="btn btn-primary m-3" onClick={handleCLearText}>Clear TextArea</button>
                <button className="btn btn-primary m-3" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary m-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-4" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter(element => element.length !== 0).length} words, {text.length} characters</p>
            </div>
            <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h1>Preview</h1>
                <p>{text.length > 0 ? text : 'Enter something in the textbox to preview it here'}</p>
            </div>
        </>
    )
}
