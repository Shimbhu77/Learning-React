import React, { useEffect, useState } from 'react'

export default function PostTweet({addPostTweet,handleUpdate,edTweet}) {

    const initialTweetFormat = {
        content:"",
        time:"",
        username:"",
        verified:false
    }
    const [tweet,setTweet] = useState(initialTweetFormat);

    const handlePostTweet = (e) =>{

        console.log("post added ");

        e.preventDefault();
       
        if(edTweet)
        {
            handleUpdate(tweet);
        }
        else
          addPostTweet(tweet);

        setTweet(initialTweetFormat);
        
           
    }

    const handleChange = (e) =>{
        // console.log(e.target.name,e.target.value);

        setTweet({
            ...tweet,
            [e.target.name]:e.target.value
        })
    }

    useEffect( ()=>{
        if(edTweet)
        {
            setTweet(edTweet);
        }

    },[edTweet]);

    return (
        <div className='container mt-10 '>
            <div className="mb-3">
                <h1 className="form-label">Tweet Post Form</h1>
                <input type="text" name='username' onChange={handleChange} className="form-control mb-3" id="exampleFormControlInput1" placeholder="your username" value={tweet.username}/>
                <input type="text" name='verified' onChange={handleChange} className="form-control my-100" id="exampleFormControlInput1" placeholder="useranme verified then write true othewise write false" value={tweet.verified}/>
            </div>
            <div className="mb-3">
                {/* <label htmlFor="exampleFormControlInput1" className="form-label">Date of Tweet</label> */}
                <input type="text" name='time' onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="date like 2 April 2002" value={tweet.time}/>
            </div>
            <div className="mb-3">
                {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Tweet Content</label> */}
                <textarea name='content' onChange={handleChange} className="form-control" id="exampleFormControlTextarea1" rows="3" value={tweet.content}></textarea>
            </div>
            <button type="button" className="btn btn-info" onClick={handlePostTweet}>{edTweet?'Save':'Post'} Tweet</button>
        </div>
    )
}
