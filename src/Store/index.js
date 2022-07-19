import { configureStore } from "@reduxjs/toolkit";
import EmployeesReducer from "./Reducers/Employees";



export const store= configureStore({
    reducer:{
        employees : EmployeesReducer,
    }
})