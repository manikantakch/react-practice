import React from 'react';
import './style.css'



const Button=({children,primary,size,backgroundColor}) =>{

    const isCheckPrimary = primary ? 'btn--primary' : 'btn--secondary'


    return (

        <>
        <buttton type="button" id="button" className={['btn', `btn--${size}`,isCheckPrimary].join(" ")}  style={backgroundColor && { backgroundColor }}>{children}</buttton>
        </>
    )

}


export default Button