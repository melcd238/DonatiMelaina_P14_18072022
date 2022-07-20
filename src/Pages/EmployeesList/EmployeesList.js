import './EmployeesList.css'
import { useDispatch, useSelector } from 'react-redux';


const EmployeesList = ()=>{
    const employees = useSelector((state)=>state.employees)
    const dispatch = useDispatch();

    console.log(employees)

    return(
        <main className="employees-container">
           <h1>Current Employees</h1>
        </main>
    )
}

export default EmployeesList