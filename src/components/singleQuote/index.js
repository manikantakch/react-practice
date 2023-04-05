import React, { useState } from 'react';

import './style.scss'

const SingleQuote = ({quote}) => {

    const [display,setDisplay] = useState("notDisplayed");

    const showButton = (e) => {
        e.preventDefault()
        setDisplay("displayed")

    }

    const hideButton = (e) => {
        e.preventDefault("notDisplayed")
        setDisplay("notDisplayed")

    }

    return (
        <div className='single-quote-container'
        onMouseEnter={e => showButton(e)}
        onMouseLeave={e => hideButton(e)}
        >

<span className='quote-cont'>"{quote.content}"</span>
<button className={display}>View</button>

        </div>
    )





}

export default SingleQuote