import React, { useState } from 'react'

export default function LikeButton() {

    const [sign,setSign] = useState(false);

    const handleLike = ()=>{
           
        setSign(!sign);

        if(!sign)
        console.log("Tweet liked.")
        else
        console.log("Tweet disliked.")
    }
  return (
  
        <button type="button" className="btn btn-success" onClick={handleLike}>Like {sign?'❤️':'♡'}</button>
  )
}
