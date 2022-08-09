import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_EMPLOYEES_LIST } from '../../data/employeesData';



export const employeesSlice = createSlice({
    name:'employees',
    initialState: DEFAULT_EMPLOYEES_LIST,
    reducers:{
        addEmployee: (state, action)=>{
            const collator = new Intl.Collator('en');
            let sortArray=(x,y)=>{
                return collator.compare(x.firstName, y.firstName);   
            }
               return [...state, action.payload].sort(sortArray)
        }
    }
})

export const { addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;