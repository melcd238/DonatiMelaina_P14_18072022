import React, { useState } from 'react';
import './EmployeesList.css'
import {  useSelector } from 'react-redux';
import { current } from '@reduxjs/toolkit';



const EmployeesList = ()=>{
    const employees = useSelector((state)=>state.employees)
    const [currentTable, setCurrentTable] = useState(1)
    const [employessPerTable, setEmployeesPerTable] = useState(10)

    const indexOfLastEmployee = currentTable * employessPerTable;
    const indexOfFirstEmployee = indexOfLastEmployee - employessPerTable;
    const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee)
    

    const nextPaginate = ()=>{
       
            setCurrentTable(currentTable + 1)
        
    }

    const prevPaginate = ()=>{
        setCurrentTable(currentTable - 1)
    }


    const tableHeader = ()=>{
        let header = Object.keys(employees[0])
         return header.map((key, index)=>(
             <th key={index}>{key.toUpperCase()}</th>
         ))
    }

    const renderTableDataEmployees = ()=>{
        return currentEmployees.map((employee, index)=>(
               <tr key={index}>
                   <td data-label="First Name">{employee.firstName}</td>
                   <td data-label="Last name">{employee.lastName}</td>
                   <td data-label="Birth">{employee.birth}</td>
                   <td data-label="Start date">{employee.startDate}</td>
                   <td data-label="Street">{employee.street}</td>
                   <td data-label="City">{employee.city}</td>
                   <td data-label="State">{employee.state}</td>
                   <td data-label="Zip Code">{employee.zipCode}</td>
                   <td data-label="Department">{employee.dept}</td>
               </tr>
         
        ))
    }

    return(
        <main className="employees-container">
           <h1>Current Employees</h1>
          <section>
              <table id="employees">
              <thead>
                 <tr>{tableHeader()}</tr>
              </thead>
                  <tbody>
                      {renderTableDataEmployees()}
                  </tbody>
              </table>
          </section> 
          <section className='pagination-btn'>
              {currentTable && currentTable === 1 ?  <button className='btn-visiblity'>Previous</button>: 
                 <button onClick={(e)=>prevPaginate(e)} >Previous</button>
              }
           
            <p className='pagination-p'>{currentTable}</p>

            {currentEmployees && currentEmployees.length < employessPerTable ?  <button className='btn-visiblity'>Previous</button> :
              <button onClick={(e)=>nextPaginate(e)} >Next</button> 
            }
          </section>
        </main>
    )
}

export default EmployeesList