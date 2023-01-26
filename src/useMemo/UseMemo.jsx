
import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const [counter, setCounter] = useState(0)
    const [counter1, setCounter1] = useState(0)
    const incCounter=()=>{
        setCounter(counter+1)
    }
    const incCounter1=()=>{
        setCounter1(counter1+1)
    }

    const isEven = useMemo(() => {
        console.log(".........");
        let i = 0;
        while (i < 200000000) i++;
       return counter%2===0
    },[counter])
    return (
        <>
            <h1>{counter} {counter1}</h1>
            <button onClick={incCounter}>inc1 </button>
            <span> {isEven ? "even" : "odd"}</span>
            <button onClick={incCounter1}>inc2</button>

        </>
    )
}
