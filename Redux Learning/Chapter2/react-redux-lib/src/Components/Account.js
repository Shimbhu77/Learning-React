import React, { useState } from 'react'

    

export default function Account() {
    const [value,setValue] = useState(" I am state ");
    return (

        <div className="card">
            <div className="container">
                <h4>
                    <b>Account Component</b>
                </h4>
                <h3>Amount:</h3>
                <h3>points:</h3>
                <button onClick={() => {console.log("plus")}}>Increment +</button>
                <button onClick={() => {console.log("minus")}}>Decrement -</button>
                <input type='text' onChange={(e) => setValue(+e.target.value)}></input>
                <button onClick={() => { console.log("incremented by value")}}>Increment By {value} +</button>
                <button onClick={() => {console.log("init account ")}}>Init Account</button>

            </div>
        </div>
    )
}
