import React, { useState } from 'react';
import './EmployeesList.css'
import {  useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage} from 'formik';
import arrowUp from '../../Assets/arrowUp.png';
import arrowBack from '../../Assets/arrowBack.png';
import * as Yup from 'yup';




const EmployeesList = ()=>{
    const employees = useSelector((state)=>state.employees)
    const collator = new Intl.Collator('en');
    let sortArray=(x,y)=>{
        return collator.compare(x.firstName, y.firstName);   
    }
    employees.sort(sortArray)



    const [currentTable, setCurrentTable] = useState(1)
    const [employessPerTable, setEmployeesPerTable] = useState(10)
    const indexOfLastEmployee = currentTable * employessPerTable;
    const indexOfFirstEmployee = indexOfLastEmployee - employessPerTable;
    const [employeesSorting, setEmployeesSorting] = useState(employees)
    const [searchBar, setSearchBar]= useState(false)
    let [filterEmployees, setFilterEmployees]= useState([])
    
   
 
    

   const currentEmployees=employeesSorting.slice(indexOfFirstEmployee, indexOfLastEmployee)

 

    const handelSort =(id)=>{
       if(id === "UpfirstName"){
        sortArray=(x,y)=>{
            return collator.compare(x.firstName, y.firstName);   
            }
        setEmployeesSorting([...employeesSorting.sort(sortArray)])
       } else if(id === "BackfirstName"){
           sortArray=(x,y)=>{
            return collator.compare(y.firstName, x.firstName);   
            }
        setEmployeesSorting([...employeesSorting.sort(sortArray)])
       } else if(id === "UplastName"){
        sortArray=(x,y)=>{
            return collator.compare(x.lastName, y.lastName);   
            }
         setEmployeesSorting([...employeesSorting.sort(sortArray)]) 
       } else if(id === "BacklastName"){
        sortArray=(x,y)=>{
            return collator.compare(y.lastName, x.lastName);   
            }
         setEmployeesSorting([...employeesSorting.sort(sortArray)])
       } else if(id === "Upcity"){
        sortArray=(x,y)=>{
            return collator.compare(x.city, y.city);   
            }
        setEmployeesSorting([...employeesSorting.sort(sortArray)])
       } else if(id === "Backcity"){
        sortArray=(x,y)=>{
            return collator.compare(y.city, x.city);   
            }
        setEmployeesSorting([...employeesSorting.sort(sortArray)])
       }else if(id === "Upstate"){
        sortArray=(x,y)=>{
            return collator.compare(x.state, y.state);   
            }
        setEmployeesSorting([...employeesSorting.sort(sortArray)])
       }else if(id === "Backstate"){
        sortArray=(x,y)=>{
            return collator.compare(y.state, x.state);   
            }
        setEmployeesSorting([...employeesSorting.sort(sortArray)]) 
       }else if(id === "Updept"){
        sortArray=(x,y)=>{
            return collator.compare(x.dept, y.dept);   
            }
        setEmployeesSorting([...employeesSorting.sort(sortArray)])
       }
       else if(id === "Backdept"){
        sortArray=(x,y)=>{
            return collator.compare(y.dept, x.dept);   
            }
        setEmployeesSorting([...employeesSorting.sort(sortArray)])
       }else if(id === "Upbirth"){
        sortArray=(x,y)=>{
            return collator.compare(x.birth, y.birth);   
            }
         setEmployeesSorting([...employeesSorting.sort(sortArray)])
       }else if(id === "Backbirth"){
        sortArray=(x,y)=>{
            return collator.compare(y.birth, x.birth);   
            }
        setEmployeesSorting([...employeesSorting.sort(sortArray)])
       }else if(id === "UpstartDate"){
        sortArray=(x,y)=>{
            return collator.compare(x.startDate, y.startDate);   
            }
        setEmployeesSorting([...employeesSorting.sort(sortArray)]) 
       }
       else if(id === "BackstartDate"){
        sortArray=(x,y)=>{
            return collator.compare(y.startDate, x.startDate);   
            }
        setEmployeesSorting([...employeesSorting.sort(sortArray)])
       }else if(id === "UpzipCode"){
        sortArray=(x,y)=>{
            return collator.compare(x.zipCode, y.zipCode);   
            }
        setEmployeesSorting([...employeesSorting.sort(sortArray)])
       }else if(id === "BackzipCode"){
        sortArray=(x,y)=>{
            return collator.compare(y.zipCode, x.zipCode);   
            }
        setEmployeesSorting([...employeesSorting.sort(sortArray)])
       }else if(id === "Upstreet"){
        sortArray=(x,y)=>{
            return collator.compare(x.street, y.street);   
            }
        setEmployeesSorting([...employeesSorting.sort(sortArray)])
       }else if(id === "Backstreet"){
        sortArray=(x,y)=>{
            return collator.compare(y.street, x.street);   
            }
        setEmployeesSorting([...employeesSorting.sort(sortArray)]) 
       }
    
    
       
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
             <span className='spanArrow'><img src={arrowUp} alt="arrowUp" id= {`Up${key}`} className={key} onClick={(e)=>handelSort(`Up${key}`)}/>
             <img src={arrowBack} alt="arrowBack"  id= {`Back${key}`} onClick={(e)=>handelSort(`Back${key}`)}/></span></th>
         ))
    }

    const renderTableDataEmployees = ()=>{
      if(searchBar){
          if(filterEmployees.length >0){
            return filterEmployees.map((employee, index)=>(
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

          } else if (filterEmployees.length === 0) {
             return( <tr>
                <td> No matching records found </td> 
              </tr>)
          }

      }else{
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
    }

   
    const renderShowEntries =()=>{
        return(
            <div>
                <Formik initialValues={{entrie: employessPerTable}}
                
                 onSubmit={(values, { setSubmitting }) => {
                     let entries = Object.values(values)
                    setSubmitting(false)
                    setSearchBar(false)
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
                      console.log(filterEmployees)
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
          <div className='footerTable'>
          <section className='showingToEntries'>
            <p className='showingParagrh'>Showing <span>{indexOfFirstEmployee+1}</span> to
            {indexOfFirstEmployee+1===employees.length ? <span>{employees.length}</span> :  <span>{employessPerTable*currentTable}</span> }
             of <span>{employees.length}</span> entries.</p>
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

export default EmployeesList