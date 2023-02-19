import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement, incrementByAmt} from '/Users/admin/PlacementPrep/placement_prep/src/redux/storeApp/feature/counterSlice.js'


function Counter(){
    const count=useSelector((state)=>state.counterme.count)
    const dispatch=useDispatch()
    return(
        <>
        <h1>{count}</h1>
        <button className="button" onClick={()=>dispatch(increment())}>+</button>
        <button className="button" onClick={()=>dispatch(decrement())}>_</button>
        <button className="button" onClick={()=>dispatch(incrementByAmt())}>inc by 10</button>

        </>
    )
}
export default Counter;