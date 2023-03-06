
import React from 'react'
import { useSelector } from 'react-redux'

const App10 = () => {
    const counter = useSelector((state) => state.counter)
    const increment = () => {

    }
    const decrement = () => [

    ]
    return (
        <>
            <h1>counter app</h1>
            <h2>{counter}</h2>
            <button onClick={increment}>inc</button>
            <button onClick={decrement}>dec</button>
        </>
    )
}

export default App10
