import './Home.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';


const Home = ()=>{
    return(
        <main>

            <h2> Create Employee</h2>

            <div className="home-form-container">
                <Formik initialValues={{ firstName: '', lastName: '',birt:"", startDate:"",street:"",city:"",state:"",zipCode:"",dept:""}}
                         onSubmit={(values, { setSubmitting }) => {
                              console.log(values)
                              setSubmitting(false);
                          
                          }}
                
                >
                    <Form className='form-container'>
                        <div className='form-control'>
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text"/>
                            <ErrorMessage name="firstName" component="div" style={{color: "red"}}/>
                        </div>

                        <div className='form-control'>
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text"/>
                            <ErrorMessage name="lastName" component="div" style={{color: "red"}}/>
                        </div>

                        <div className='form-control'>
                            <label htmlFor='birth'>Date of Birth</label>
                            <Field name='birth' type="date"/>
                            <ErrorMessage name="birth" component="div" style={{color: "red"}}/>
                        </div>

                        <div className='form-control'>
                            <label htmlFor='startDate'>Start Date</label>
                            <Field name='startDate' type="date" />
                            <ErrorMessage name="startDate" component="div" style={{color: "red"}}/>
                        </div>

                        <fieldset className='form-adress'>
                           <legend>Address</legend>
                             <div className='form-control'>
                               <label htmlFor='street'>Street</label>
                               <Field name='street' type="text"/>
                               <ErrorMessage name="street" component="div" style={{color: "red"}}/>
                            </div>

                            <div className='form-control'>
                               <label htmlFor='city'>City</label>
                               <Field name="city" type="text"/>
                               <ErrorMessage name="city" component="div" style={{color: "red"}}/>
                            </div>

                            <div className='form-control'>
                               <label htmlFor='state'>State</label>
                               <Field name="state" type="text" component="select" className="select-input"/>
                               <ErrorMessage name="state" component="div" style={{color: "red"}}/>
                            </div>

                            <div className='form-control'>
                               <label  htmlFor='zipCode'>Zip Code</label>
                               <Field name="zipCode" type="number" />
                               <ErrorMessage name="zipCode" component="div" style={{color: "red"}}/>
                            </div>

                        </fieldset>

                        <div className='form-control'>
                            <label htmlFor='dept'>Department</label>
                            <Field name="dept" type="text" component="select" className="select-input"/>
                            <ErrorMessage name="dept" component="div" style={{color: "red"}}/>
                        </div>

                        <button className='btn-save' type="submit">Save</button> 
                    </Form>
                </Formik>

            </div>

        </main>
    )
}

export default Home;