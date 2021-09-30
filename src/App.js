import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class App extends React.Component {
    render() {
        return (
            <Formik
                initialValues={{
                    FirstName:'',
                    LastName:'',
                    Gender:'',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={Yup.object().shape({
                    firstname: Yup.string()
                           .required('Firstname is required'),
                    lastname: Yup.string()
                             .required('Firstname is required'),
                    gender: Yup.string()
                            .required('gender is required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                    confirmPassword:  Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Confirm Password is required')
                })}
                onSubmit={fields => {
                    console.log(fields)
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields))
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="fname">FirstName</label>
                            <Field name="fname" type="text" className={'form-control' + (errors.firstname && touched.firstname ? ' is-invalid' : '')} />
                            <ErrorMessage name="fname" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lname">LastName</label>
                            <Field name="lname" type="text" className={'form-control' + (errors.lastname && touched.lastname ? ' is-invalid' : '')} />
                            <ErrorMessage name="lname" component="div" className="invalid-feedback" />
                        </div>
                      
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Register</button>
                            
                        </div>
                    </Form>
                )}
            />
        )
    }
}

export { App }; 