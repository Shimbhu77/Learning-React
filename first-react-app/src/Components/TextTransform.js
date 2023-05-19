import React,{useState} from 'react'

export default function TextTransform(props) {

    const [text, setText] = useState("");
    
    const handleOnClick = ()=>
    {
        // console.log("inside onClick fun " + text);
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase ","success");
    }
    const handleOnClicklower = ()=>
    {
        // console.log("inside onClick fun " + text);
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase ","success");
    }

    const handleOnClickClear = ()=>
    {
        // console.log("inside onClick fun " + text);
        setText("");
        props.showAlert(" Text Cleard ","success");
    }

    const handleOnClickReverse = ()=>
    {
        // console.log("inside onClick fun " + text);
        setText(text.split("").reverse().join(""));
        props.showAlert(" Text Reversed ","success");
    }

    const handleCopy = ()=>
    {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Text Copied to ClipBoard ","success");
    }

    const handleExtraSpaces = ()=>
    {
        var newText = text.split(/[ ]+/) ;
        setText(newText.join(" "));
        props.showAlert(" Text Extra Spaces Removed ","success");
    }
    const handleOnChange = (event)=>
    {
        // console.log("inside onChange ");
        setText(event.target.value);
    }

  return (
 
    <>
        
        <div className='container' style={ {color: props.mode==='light'?'black':'white'}}>
            <div className='mb-3'>
            <h1>{props.heading} </h1>
            <textarea className='form-control' value={text} onChange={handleOnChange} style={ {backgroundColor: props.mode==='light'?'white':'#2c4646',color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"/> 
            <button className="btn btn-primary mx-0 my-4" onClick={handleOnClick} >Convert Uppercase </button>
            <button className="btn btn-primary mx-2 my-4" onClick={handleOnClicklower} >Convert Lowercase </button>
            <button className="btn btn-primary mx-2 my-4" onClick={handleOnClickClear} >Clear Text </button>
            <button className="btn btn-primary mx-2 my-4" onClick={handleOnClickReverse} >Reverse Text </button>
            <button className="btn btn-primary mx-2 my-4" onClick={handleCopy} >Copy Text </button>
            <button className="btn btn-primary mx-2 my-4" onClick={handleExtraSpaces} >Remove Extra Spaces </button>
            </div>
        </div>

        <div className='container my-3' style={ {color: props.mode==='light'?'black':'white'}}>
            <h1>Summery of Text</h1>
            <p>total words is {text.length==0 ? 0 :text.split(" ").length} and total characters is {text.length}.</p>
            {/* <p>total words is {text.split(" ").length} and total characters is {text.length}.</p> */}
            <p>average time to read the text is {0.008* (text.length==0 ? 0 :text.split(" ").length) } minutes.</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter something to preview"}</p>
        </div>
    </>

    
    
  )
}
