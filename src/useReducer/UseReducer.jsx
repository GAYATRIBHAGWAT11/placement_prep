import React, { useReducer } from "react";


let initialVal = 5

const Reducer = (state, action) => {
    console.log(action);
    if (action.type === 'INCREMENT') {
        return state + 1
    } else if (action.type === 'DECREMENT') {
        return state - 1
    }
    return state;
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(Reducer, initialVal)
    return (
        <>
        <h1>{state}</h1>
        <button onClick={()=> dispatch({type:'INCREMENT'})}>inc</button>
        <button onClick={()=> dispatch({type:'DECREMENT'})}>dec</button>

        </>
    )

}
export default UseReducer;