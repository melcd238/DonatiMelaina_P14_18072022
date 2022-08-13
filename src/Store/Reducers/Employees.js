import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_EMPLOYEES_LIST } from '../../data/employeesData';



export const employeesSlice = createSlice({
    name:'employees',
    initialState: DEFAULT_EMPLOYEES_LIST,
    reducers:{
        addEmployee: (state, action)=>{
               return [...state, action.payload].sort((a,b)=> a.firstName.toLowerCase() > b.firstName.toLowerCase() ? 1 : -1)
        }
    }
})

export const { addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;