import React, { useState } from "react";




const Counter=()=>{
    const [counter, setCounter]=useState(0)
    return(
        <>
        <h1>{counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>increment</button>

        </>
    )
}
export default function Hoc(){
    return(
        <>
        <h1>this is higher order component</h1>
        <Hoc2 cmp={Counter}/>
        <Hoc3 cmp1={Counter}/>
        </>
    )
}

const Hoc2=(props)=>{
    return(
        <>
        <h2 style={{backgroundColor:'red'}}><props.cmp/></h2>
        </>
    )
}
const Hoc3=(props)=>{
    return(
        <>
        <h2 style={{backgroundColor:'yellow'}}><props.cmp1/></h2>
        </>
    )
}