import React, { useEffect, useState } from 'react'

export default function API() {

   const [q,setQ] = useState("");

  useEffect(()=>{

    const fetchdata = async ()=>{
         
        setQ("Hello, How are you")
        const res = await fetch("https://libretranslate.com/translate", {
        method: "POST",
        body: JSON.stringify({
          q: "Hello!",
          source: "en",
          target: "es"
        }),
        headers: { "Content-Type": "application/json" }
      });
      
      console.log(await res.json());
    }

    fetchdata();
    },[q]);

    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    
 

  return (
    <div>API</div>
  )
}
