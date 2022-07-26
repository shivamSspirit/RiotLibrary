import React from 'react'
import './signup.css'
import * as AuthApis from '../../../api/authapi'
import { Link, useNavigate } from 'react-router-dom';

import useSignupForm from '../../../hooks/useForms/useSignup';

function SignUp() {
    const formSignup = () => {
        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
    }
    const { values, errors, handleChange } = useSignupForm(formSignup)
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
            AuthApis.signupHandler({
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password
            }).then(res => {
                console.log('res from sign up', res)
            })
            navigate('/auth/login')


        } else {
            alert("There is an Error!");
        }
    }


    return (
        <div className='mainSignContainer'>
            <div className='signup-container'>
                <form onSubmit={handleSubmit} className='signup-form'>

                    <div className='signup-parts'>
                        <label className='first-label' htmlFor='firstName'>FirstName
                        </label>
                        <input value={values?.firstName?values?.firstName:''} className={`sign-inputs ${errors?.firstName && 'boader-red'}`} type='text' name='firstname' onChange={handleChange} placeholder='type firstName' />
                        {errors.firstName && <p className='signup-error'>{errors.firstName}</p>}
                    </div>


                    <div className='signup-parts'>
                        <label className='first-label' htmlFor='lastName'>LastName
                        </label>
                        <input value={values?.lastName?values?.lastName:''} className={`sign-inputs ${errors?.lastName && 'boader-red'}`} type='text' name='lastname' onChange={handleChange} placeholder='type lastName' />
                        {errors.lastName && <p className='signup-error'>{errors.lastName}</p>}
                    </div>


                    <div className='signup-parts'>
                        <label className='first-label' htmlFor='emailName'>email
                        </label>
                        <input value={values?.email?values?.email:''} className={`sign-inputs ${errors?.email && 'boader-red'}`} type='email' name='email' onChange={handleChange} placeholder='type email' />
                        {errors.email && <p className='signup-error'>{errors.email}</p>}

                    </div>


                    <div className='signup-parts'>
                        <label className='first-label' htmlFor='password'>password
                        </label>
                        <input value={values?.password?values?.password:''} className={`sign-inputs ${errors?.password && 'boader-red'}`} type='password' name='password' onChange={handleChange} placeholder='type password' />
                        {errors.password && <p className='signup-error'>{errors.password}</p>}

                    </div>
                    <div className='signup-parts'>
                        <button className='sign-btn' type='submit'>Send</button>
                    </div>

                    <div className='signup-parts'>
                        <span>if you have account:<Link className='log-link' style={{textDecoration:"none",color:"inherit"}} to={'/auth/login'}>Login</Link></span>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default SignUp
