import React from 'react';
import './EmployeesList.css'
import {  useSelector } from 'react-redux';



const EmployeesList = ()=>{
    const employees = useSelector((state)=>state.employees)
 

   console.log(employees)

    const tableHeader = ()=>{
        let header = Object.keys(employees[0])
         return header.map((key, index)=>(
             <th key={index}>{key.toUpperCase()}</th>
         ))
    }

    const renderTableDataEmployees = ()=>{
        return employees.map((employee, index)=>(
               <tr key={index}>
                   <td>{employee.firstName}</td>
                   <td>{employee.lastName}</td>
                   <td>{employee.birth}</td>
                   <td>{employee.startDate}</td>
                   <td>{employee.street}</td>
                   <td>{employee.city}</td>
                   <td>{employee.state}</td>
                   <td>{employee.zipCode}</td>
                   <td>{employee.dept}</td>
               </tr>
         
        ))
    }

    return(
        <main className="employees-container">
           <h1>Current Employees</h1>
          <section>
              <table id="employees">
                  <tbody>
                      <tr>{tableHeader()}</tr>
                      {renderTableDataEmployees()}
                  </tbody>
              </table>
          </section> 
        </main>
    )
}

export default EmployeesList