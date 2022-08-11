import React, { useState } from 'react';
import './EmployeesList.css'
import {  useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage} from 'formik';
import arrowUp from '../../Assets/arrowUp.png';
import arrowBack from '../../Assets/arrowBack.png';
import * as Yup from 'yup';




const  EmployeesList = ()=>{
    const employees = useSelector((state)=>state.employees)
    
 

    const [currentTable, setCurrentTable] = useState(1)
    const [employessPerTable, setEmployeesPerTable] = useState(10)
    const indexOfLastEmployee = currentTable * employessPerTable;
    const indexOfFirstEmployee = indexOfLastEmployee - employessPerTable;
    const [employeesSorting, setEmployeesSorting] = useState(employees)
    const [searchBar, setSearchBar]= useState(false)
     let [filterEmployees, setFilterEmployees]= useState(employees)
    let currentEmployees;
   
 
 
 if(!searchBar){
   currentEmployees=employeesSorting.slice(indexOfFirstEmployee, indexOfLastEmployee)
 }else if(searchBar){
    currentEmployees=filterEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee) 
 }
    


const handelSort =( key, option)=>{
     if (option === "ASC"){
            if(searchBar){
                
                 const sortedEmployee = [...filterEmployees].sort((a,b)=> a[key].toLowerCase() > b[key].toLowerCase() ? 1 : -1);
                  setFilterEmployees(sortedEmployee);
                
            } 
            else if(!searchBar){
             const sortedEmployee = [...employeesSorting].sort((a,b)=> a[key].toLowerCase() > b[key].toLowerCase() ? 1 : -1);
             setEmployeesSorting(sortedEmployee);
        }
      
     }
     if (option === "DESC"){
        if(searchBar){
             const sortedEmployee = [...filterEmployees].sort((a,b)=> a[key].toLowerCase() < b[key].toLowerCase() ? 1 : -1);
              setFilterEmployees(sortedEmployee);
        } 
        else if(!searchBar){
         const sortedEmployee = [...employeesSorting].sort((a,b)=> a[key].toLowerCase() < b[key].toLowerCase() ? 1 : -1);
         setEmployeesSorting(sortedEmployee);
    }
  
 }
    }

   
  const renderAllEmployees = ()=>{
      setSearchBar(false)
      setEmployeesSorting(employees)
  }

    const validationSchema = Yup.object().shape({
        search: Yup.string()
            .min(2, "To short")
            .max(10, "To long!")
            .required("Field is required"),             
          
    });
    


    const nextPaginate = ()=>{
       
            setCurrentTable(currentTable + 1)
        
    }

    const prevPaginate = ()=>{
        setCurrentTable(currentTable - 1)
    }


    const tableHeader = ()=>{
        let header = Object.keys(employees[0])
         return header.map((key, index)=>(
             <th key={index}>{key.toUpperCase()}
             <span className='spanArrow'><img src={arrowUp} alt="arrowUp" id= {`Up${key}`} className={key} onClick={(e)=>handelSort(key,"ASC")}/>
             <img src={arrowBack} alt="arrowBack"  id= {`Back${key}`} onClick={(e)=>handelSort(key, "DESC")}/></span></th>
         ))
    }



    const renderTableDataEmployees = ()=>{
     
          if(currentEmployees.length >0){
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

          } else if (currentEmployees.length === 0) {
             return( <tr>
                <td> No matching records found </td> 
              </tr>)
          }

    }

   
    const renderShowEntries =()=>{
        return(
            <div>
                <Formik initialValues={{entrie: employessPerTable}}
                
                 onSubmit={(values, { setSubmitting }) => {
                     let entries = Object.values(values)
                    setSubmitting(false)
                    setEmployeesPerTable(parseInt(entries[0]))
                }}>

                <Form className='form-container-entries'>
                    <span>Show</span>
                <Field name="entrie"  component="select" className="select-input">
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                </Field>
                     <span>entries</span>
                     <button type="submit" className='btn-entries'>Submit</button>
                </Form>

                </Formik>

            </div>
        )
    }

    const renderSearchBar =()=>{
        return(
            <div>
                <Formik initialValues={{search:""}}
                 validationSchema={validationSchema}
                  onSubmit={(values,{setSubmitting, resetForm})=>{
                      let option = Object.values(values)
                      filterEmployees = employees.filter(elt => elt.firstName.toLowerCase().includes(option[0].toLowerCase()) 
                      || elt.lastName.toLowerCase().includes(option[0].toLowerCase()) || elt.state.toLowerCase().includes(option[0].toLowerCase())
                      || elt.city.toLowerCase().includes(option[0].toLowerCase())
                      || elt.dept.toLowerCase().includes(option[0].toLowerCase())
                      || elt.zipCode.toString().includes(option[0])
                      || elt.birth.includes(option[0])
                      || elt.startDate.includes(option[0])
                      || elt.street.includes(option[0]))
                      setSearchBar(true)
                      setFilterEmployees(filterEmployees)
                      setSubmitting(false)
                     resetForm({search:""})
                      
                  }}
                >
                    <Form className='form-container-entries'>
                       <label htmlFor='search'>Search:</label>
                        <Field name="search" type="text"  className="select-input" placeholder="search for anything among employees"></Field>
                        <ErrorMessage name="search" component="div" style={{color: "red"}}/>
                        <button type="submit" className='btn-entries'>Submit</button>
                    </Form>
                </Formik>
            </div>
        )
    }

    const renderShowingToEntries = ()=>{
         if(!searchBar){
             return(
            <p className='showingParagrh'>Showing <span>{indexOfFirstEmployee+1}</span> to
            {indexOfFirstEmployee+1===employees.length || employees.length<employessPerTable*currentTable ? <span>{employees.length}</span> :  <span>{employessPerTable*currentTable}</span> }
             of <span>{employees.length}</span> entries.</p>
             )
         } else{
             return(
            <p className='showingParagrh'>Showing <span>{indexOfFirstEmployee+1}</span> to
            {indexOfFirstEmployee+1===filterEmployees.length || filterEmployees.length<employessPerTable*currentTable ? <span>{filterEmployees.length}</span> :  <span>{employessPerTable*currentTable}</span> }
             of <span>{filterEmployees.length}</span>
             entries.(Filtered from  <span>{employees.length}</span> total entries)</p>
             )
         }

    }

    return(
        <main className="employees-container">
           <h1>Current Employees</h1>
           <button className='btn-entries' onClick={(e)=>renderAllEmployees()}>See all Employees</button>

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
          <div className='footerTable'>
          <section className='showingToEntries'>
               {renderShowingToEntries()}
          </section>
          <section className='pagination-btn'>
              {currentTable && currentTable === 1 ?  <button className='btn-visiblity'>Previous</button>: 
                 <button onClick={(e)=>prevPaginate(e)} >Previous</button>
              }
           
            <p className='pagination-p'>{currentTable}</p>

            { currentEmployees && currentEmployees.length  < employessPerTable  ?  <button className='btn-visiblity'>Next</button> :
              <button onClick={(e)=>nextPaginate(e)} >Next</button> 
            }
            
          </section>
          </div>
        </main>
    )
}


export default EmployeesList;
