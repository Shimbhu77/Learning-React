import React,{useState} from 'react'

export default function TextTransform(props) {

    const [text, setText] = useState("");
    const handleOnClick = ()=>
    {
        // console.log("inside onClick fun " + text);
        setText(text.toUpperCase());
    }
    const handleOnClicklower = ()=>
    {
        // console.log("inside onClick fun " + text);
        setText(text.toLowerCase());
    }

    const handleOnClickClear = ()=>
    {
        // console.log("inside onClick fun " + text);
        setText("");
    }

    const handleOnClickReverse = ()=>
    {
        // console.log("inside onClick fun " + text);
        setText(text.split("").reverse().join(""));
    }
    const handleOnChange = (event)=>
    {
        // console.log("inside onChange ");
        setText(event.target.value);
    }

  return (
 
    <>
        <div className='container'>
            <div className='mb-3'>
            <h1>{props.heading} </h1>
            <textarea className='form-control' value={text} onChange={handleOnChange}  id="myBox" rows="8"/> 
            <button className="btn btn-primary mx-0 my-4" onClick={handleOnClick} >Convert Uppercase </button>
            <button className="btn btn-primary mx-2 my-4" onClick={handleOnClicklower} >Convert Lowercase </button>
            <button className="btn btn-primary mx-2 my-4" onClick={handleOnClickClear} >Clear Text </button>
            <button className="btn btn-primary mx-2 my-4" onClick={handleOnClickReverse} >Reverse Text </button>
            </div>
        </div>

        <div className='container my-3'>
            <h1>Summery of Text</h1>
            <p>total words is {text.split(" ").length} and total characters is {text.length}.</p>
            <p>average time to read the text is {0.008*text.split(" ").length} minutes.</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>

    
    
  )
}
