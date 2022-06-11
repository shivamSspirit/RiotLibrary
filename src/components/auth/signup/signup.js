import React, { useState } from 'react'
import './signup.css'
import * as AuthApis from '../../../api/authapi'
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const nameVal = e.target.name;
        if (nameVal === 'firstname') {
            setInput({
                ...input,
                firstName: e.target.value
            });
        }
        if (nameVal === 'lastname') {
            setInput({
                ...input,
                lastName: e.target.value
            });
        }
        if (nameVal === 'email') {
            setInput({
                ...input,
                email: e.target.value
            })
        }
        if (nameVal === 'password') {
            setInput({
                ...input,
                password: e.target.value
            })
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        AuthApis.signupHandler({
            firstName: input.firstName,
            lastName: input.lastName,
            email: input.email,
            password: input.password
        }).then(res => {
            console.log('res from sign up', res)
        })
        navigate('/auth/login')
    }


    return (
        <div className='mainSignContainer'>
            <div className='signup-container'>
                <form onSubmit={handleSubmit} className='signup-form'>

                    <div className='parts'>
                        <label className='first-label' htmlFor='firstName'>FirstName
                        </label>
                        <input className='sign-inputs' type='text' name='firstname' onChange={handleInputChange} placeholder='type firstName' />
                    </div>


                    <div className='parts'>
                        <label className='first-label' htmlFor='lastName'>LastName
                        </label>
                        <input className='sign-inputs' type='text' name='lastname' onChange={handleInputChange} placeholder='type lastName' />
                    </div>


                    <div className='parts'>
                        <label className='first-label' htmlFor='emailName'>email
                        </label>
                        <input className='sign-inputs' type='email' name='email' onChange={handleInputChange} placeholder='type email' />

                    </div>


                    <div className='parts'>
                        <label className='first-label' htmlFor='password'>password
                        </label>
                        <input className='sign-inputs' type='password' name='password' onChange={handleInputChange} placeholder='type password' />

                    </div>
                    <div className='parts'>
                        <button className='sign-btn' type='submit'>Send</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default SignUp
