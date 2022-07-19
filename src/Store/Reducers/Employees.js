import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_EMPLOYEES_LIST } from '../../data/employeesData'



export const employeesSlice = createSlice({
    name:'employees',
    initialState: DEFAULT_EMPLOYEES_LIST,
    reducers:{}
})


export default employeesSlice.reducer;