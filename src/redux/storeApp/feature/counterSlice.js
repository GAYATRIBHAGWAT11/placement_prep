import { createSlice } from "@reduxjs/toolkit"


const intialStateVal = {
    count: 0
}

export const CounterSlice=createSlice({
    name:"counteryou",
    initialState:intialStateVal,
    reducers:{
        increment:(state)=>{
            state.count+=1
        },
        decrement:(state)=>{
            state.count-=1
        },
        incrementByAmt:(state)=>{
            state.count+=10
        },
    },
})

export const {increment, decrement, incrementByAmt}=CounterSlice.actions
export default CounterSlice.reducer



