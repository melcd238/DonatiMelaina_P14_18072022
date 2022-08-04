import React, { useState } from 'react';
import './EmployeesList.css'
import {  useSelector } from 'react-redux';
import { Formik, Field, Form} from 'formik';
import * as Yup from 'yup';




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

    const renderShowEntries =()=>{
        return(
            <div>
                <Formik initialValues={employessPerTable}>

                <Form className='form-container-entries'>
                    <span>Show</span>
                <Field name="entries"  component="select" className="select-input">
                        <option value={employessPerTable}>{employessPerTable}</option>
                        <option value={20}>{20}</option>
                        <option value={30}>{30}</option>
                </Field>
                     <span>entries</span>
                </Form>

                </Formik>

            </div>
        )
    }

    const renderSearchBar =()=>{
        return(
            <div>
                <Formik initialValues={""}>
                    <Form className='form-container-entries'>
                       <label htmlFor='search'>Search:</label>
                        <Field name="search" type="text"  className="select-input"></Field>
                    </Form>
                </Formik>
            </div>
        )
    }

    return(
        <main className="employees-container">
           <h1>Current Employees</h1>

           <section className='showAndSearchContainer'>
               {renderShowEntries()}
               {renderSearchBar()}
           </section>

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