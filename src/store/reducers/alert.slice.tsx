import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    open:false,
    result:false
}

const storeAlert=createSlice({
    name:'storeAlert',
    initialState,
    reducers:{
        setOpen:(state)=>{
            state.open=true;
        },
        setClose:(state)=>{
            state.open=false;
        },
        setResult:(state,action)=>{
            state.result=action.payload;
        },
        resetSate:(state)=>{
            state.open=false;
            state.result=false;
        }
    }
});
export const {setOpen,setClose,setResult,resetSate}=storeAlert.actions;
export default storeAlert.reducer;