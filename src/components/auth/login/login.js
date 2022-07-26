import React, { useState } from 'react'
import * as AuthApis from '../../../api/authapi'
import { Link, useNavigate } from 'react-router-dom';
import Masterinput from '../../inputfield/minput';
import { useAuth } from '../../../context/authContext'
import { useToast } from '../../../hooks/useToastify';
import './login.css'


import useLoginForm from '../../../hooks/useForms/useLoginForm';


function Login() {
    const navigate = useNavigate();
    const { setAuthToken } = useAuth();


 const formLogin = () => {
        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
    }
    const { values, errors, handleChange , asGuest } = useLoginForm(formLogin)
    // const [input, setInput] = useState({
    //     email: '',
    //     password: ''
    // });


    // const handleInputChange = (e) => {
    //     const nameVal = e.target.name;

    //     if (nameVal === 'email') {
    //         setInput({
    //             ...input,
    //             email: e.target.value
    //         })
    //     }
    //     if (nameVal === 'password') {
    //         setInput({
    //             ...input,
    //             password: e.target.value
    //         })
    //     }
    // }

    const handleSubmit = async(event) => {
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


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     AuthApis.LoginHandler({ email: input.email, password: input.password }).then(res => {
    //          setAuthToken(res?.data?.encodedToken)
    //          })
    //     navigate('/')
    // }


    return (
        <div className='main-Container'>
            <div className='login-container'>
                <form onSubmit={handleSubmit} className='login-form'>


                    <div className='parts'>
                        <label className='email-label' htmlFor='emailName'>Email
                        </label>
                        <Masterinput value={values?.email?values?.email:''} className={`email-input ${errors?.email&&'boader-log-red'}`} type='email' name='email' onChange={handleChange} placeholder='type email' />
                        {errors.email && <p className='login-error'>{errors.email}</p>}

                    </div>


                    <div className='parts'>
                        <label className='pwd-label' htmlFor='password'>Password
                        </label>
                        <Masterinput value={values?.password?values?.password:''} className={`password-input ${errors.password&&'boader-log-red'} `} type='password' name='password' onChange={handleChange} placeholder='type password' />
                        {errors.password && <p className='login-error'>{errors.password}</p>}

                    </div>
                    <div className='parts'>
                        <button className='log-btn' type='submit'>Login</button>
                    </div>

                    <div className='parts'>
                        <Link className='sign-link' style={{textDecoration:'none',color:"inherit"}} to={'/auth/signup'}>Create New One</Link>
                    </div>

                    <div className='parts log-as-guest'>
                        <button onClick={async(e)=>await asGuest(e)} className='log-btn'>Login as Guest</button>
                    </div>


                </form>
            </div>
          
        </div>
    )
}

export default Login


