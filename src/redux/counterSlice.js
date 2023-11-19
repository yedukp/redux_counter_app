import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    reducers:{
        //actions are created inside this reducers key as object
        //logics to update state
        //function to increment number
        increment:(state, action)=>{
            //if its argument function it can only be accessed by action and value in payload
            state.value += action.payload
        },
        //function to increment number
        decrement:(state, action)=>{
            //if its argument function it can only be accessed by action and value in payload
            state.value -= action.payload
        },
        //function to reset
        reset:(state)=>{
            state.value = 0
        } 
    }
})

//actions is required by the components inorder to update state
export const {increment, decrement, reset}= counterSlice.actions

//reducer is required to store to change the state value
export default counterSlice.reducer