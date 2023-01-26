import React, { useCallback, useState } from 'react'
import Child from '/Users/admin/PlacementPrep/placement_prep/src/useCallbackHook/Child.jsx'

export default function Parent() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState([])

    const IncrementOne =() => {
        setCounterOne(counterOne + 1)
    }

    const fun=useCallback(()=>{
        console.log("hello gayatri");
    },counterOne)


    return (
        <>
        <h1>{counterOne}</h1>
            <Child counterTwo={counterTwo} setCounterTwo={setCounterTwo} fun={fun}/>
            <button onClick={IncrementOne}>inc</button>
        </>
    )
}
