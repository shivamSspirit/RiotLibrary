import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import * as AuthApis from '../../../api/authapi'
import Masterinput from '../../inputfield/minput';
import { useAuth } from '../../../context/authContext'
import './login.css'
import useLoginForm from '../../../hooks/useForms/useLoginForm';


function Login() {
    const navigate = useNavigate();
    const { setAuthToken } = useAuth();

    const formLogin = () => {
        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
    }
    const { values, errors, handleChange, asGuest } = useLoginForm(formLogin)


    const handleSubmit = async (event) => {
        if (event) event.preventDefault();
        if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
            AuthApis?.LoginHandler({
                email: values.email,
                password: values.password
            }).then(res => {
                setAuthToken(res?.data?.encodedToken)
            })
            navigate('/')
        } else {
            alert("There is an Error!");
        }
    }

    return (
        <div className='main-Container'>
            <div className='login-container'>
                <form onSubmit={handleSubmit} className='login-form'>

                    <div className='parts'>
                        <label className='email-label' htmlFor='emailName'>Email
                        </label>
                        <Masterinput value={values?.email ? values?.email : ''} className={`email-input ${errors?.email && 'boader-log-red'}`} type='email' name='email' onChange={handleChange} placeholder='type email' />
                        {errors.email && <p className='login-error'>{errors.email}</p>}
                    </div>


                    <div className='parts'>
                        <label className='pwd-label' htmlFor='password'>Password
                        </label>
                        <Masterinput value={values?.password ? values?.password : ''} className={`password-input ${errors.password && 'boader-log-red'} `} type='password' name='password' onChange={handleChange} placeholder='type password' />
                        {errors.password && <p className='login-error'>{errors.password}</p>}
                    </div>

                    <div className='parts'>
                        <button className='log-btn' type='submit'>Login</button>
                    </div>

                    <div className='parts'>
                        <Link className='sign-link' style={{ textDecoration: 'none', color: "inherit" }} to={'/auth/signup'}>Create New One</Link>
                    </div>

                    <div className='parts log-as-guest'>
                        <button onClick={async (e) => await asGuest(e)} className='log-btn'>Login as Guest</button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Login


