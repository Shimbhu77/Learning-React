import React, { useState } from 'react'
import { depositAction,withdrawAction,depositActionByAmount,withdrawActionByAmount} from '../Redux/Index'; 
import { useSelector,useDispatch } from "react-redux";

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
                {/* <button onClick={() => dispatch(depositAction())}>Deposit</button>
                <button onClick={() => dispatch(withdrawAction())}>withdraw</button> */}
                <input type='number' onChange={(e)=>setValue(+e.target.value)} placeholder="Enter Money in Rupees"></input>
                <button onClick={() => dispatch(depositActionByAmount(value))}>Deposit Amount</button>
                <button onClick={() => dispatch(withdrawActionByAmount(value))}>withdraw Amount</button>
            </div>
        </div>
    )
}
