import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleDelClick = () =>{
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text here');    
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'grey'}}>
        <h1 >{props.heading}</h1>
        <div className ="mb-3">
            <textarea className ="form-control" value={text} onChange={handleOnChange} 
            style={{backgroundColor: props.mode === 'dark'?'grey':'white' , 
            color:props.mode === 'dark'?'white':'grey' }} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-success mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-danger mx-2' onClick={handleDelClick}>Delete</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'grey'}}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes to read </p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
 