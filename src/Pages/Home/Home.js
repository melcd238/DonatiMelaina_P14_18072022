import './Home.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { statesOptions } from '../../data/states';
import { servicesOptions } from '../../data/services';


const Home = ()=>{


    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(3, "To short")
            .max(30, "To long!")
            .required("First name is required"),
        lastName: Yup.string()
            .min(3, "To short")
            .max(30, "To long!")
            .required("Last name is required"),
        birth: Yup.date()
            .required("This field is required"),
        startDate: Yup.date()
            .required("This field is required"),
        street: Yup.string()
            .required("This field is required"),
        city: Yup.string()
            .required("This field is required"),
        state: Yup.string()
            .required("This field is required"),
        zipCode: Yup.number()
            .required("This field is required"),
        dept: Yup.string()
            .required("This field is required"),               
          
    });

    return(
        <main>

            <h2> Create Employee</h2>

            <div className="home-form-container">
                <Formik initialValues={{ firstName: '', lastName: '',birth:"", startDate:"",street:"",city:"",state:"",zipCode:"",dept:""}}
                         validationSchema={validationSchema}
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
                               <Field name="state" component="select" className="select-input">
                                   {statesOptions.map((opt)=>(
                                       <option value={opt.value}>{opt.label}</option>
                                   ))}
                               </Field>
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
                            <Field name="dept"  component="select" className="select-input">
                                {servicesOptions.map((opt)=>(
                                    <option value={opt.value}>{opt.label}</option>
                                ))}
                            </Field>    
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