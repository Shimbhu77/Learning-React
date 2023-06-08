import React from 'react'
import { useSelector } from "react-redux";
export default function Bonus() {
    const balance = useSelector((state) => state.account.balance);
    return (
        <div>
            <div className="container">
                <h4>
                    <b>Bonus Details</b>
                </h4>
                <h3>Balance: ₹ {balance}</h3>
            </div>
        </div>
    )
}
