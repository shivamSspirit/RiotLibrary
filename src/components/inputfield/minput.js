import React from 'react'

function Masterinput({ name, value, onChange, className, type, placeholder }) {


    return (
        <>
            <input className={className} name={name} value={value} onChange={onChange} type={type} placeholder={placeholder} />
        </>
    )
}

export default Masterinput
