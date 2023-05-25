import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from '../State/Index';
import { bindActionCreators } from 'redux';

export default function Shop() {
    const dispatch = useDispatch();
    const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch);
    const amount = useSelector(state => state.amount);
  return (
    <>
       <div>
         <h1>आपके खाते की शेष राशि : ₹ {amount>0? amount:0 } </h1>
         <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
           Update Balance
         <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
         {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
           Add to Cart
         <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
       </div>
        
    </>
  )
}
