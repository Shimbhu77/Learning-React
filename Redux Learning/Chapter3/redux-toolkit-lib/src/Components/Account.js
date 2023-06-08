import React, { useState } from 'react'
import { useSelector,useDispatch } from "react-redux";
import { deposit,withdraw,depositByAmount,withdrawByAmount } from '../Redux/AccountSlice';

export default function Account() {
    const [value,setValue] = useState(0);
    const balance =useSelector((state)=>state.account.balance);
    const dispatch = useDispatch();

    return (

        <div className="card">
            <div className="container">
                <h4>
                    <b>Account Details</b>
                </h4>
                <h3>Balance: ₹ {balance}</h3>
                <button onClick={() => dispatch(deposit())}>Deposit</button>
                <button onClick={() => dispatch(withdraw())}>withdraw</button>
                <input type='number' onChange={(e)=>setValue(+e.target.value)} placeholder="Enter Money in Rupees"></input>
                <button onClick={() => dispatch(depositByAmount(value))}>Deposit Amount</button>
                <button onClick={() => dispatch(withdrawByAmount(value))}>withdraw Amount</button>
            </div>
        </div>
    )
}
