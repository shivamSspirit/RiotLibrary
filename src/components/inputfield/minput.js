import React, { useState } from 'react'
import { omit } from 'lodash'

function Masterinput({ name, value, onChange, classname, type, placeholder }) {

    const [logerros, setLogerr] = useState({})

    const Validate = (event, name, value) => {
        //A function to validate each input values
        switch (name) {
            case 'email':
                if (
                    !new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ) {
                    setLogerr({
                        ...logerros,
                        email: 'Enter a valid email address'
                    })
                } else {

                    let newObj = omit(logerros, "email");
                    setLogerr(newObj);

                }
                break;
            case 'password':
                if (
                    !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
                ) {
                    setLogerr({
                        ...logerros,
                        password: 'Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers'
                    })
                } else {
                    let newObj = omit(logerros, "password");
                    setLogerr(newObj);
                }
                break;

            default:
                break;
        }
        return logerros;
    }


    return (
        <>
            <input className={classname} name={name} value={value} onChange={onChange} type={type} placeholder={placeholder} />
        </>
    )
}

export default Masterinput
