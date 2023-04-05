import React, { useEffect, useState } from 'react';


const QutoesRandom = () => {

    const [quoteObj,setQuoteObj] = useState({})

    const fetchData = () => {

    fetch('https://api.quotable.io/random')
    .then((res) => res.json()).
    then((res=>setQuoteObj(res)))
   

    }




    useEffect(() => {
setInterval(() => {
    fetchData()
},8000)

// fetchData()
   

    },[])

    return (
<div className='quotes-random-container'>

    <div className="quote">
        <h2 className='quote-content'>"{quoteObj.content}"</h2>
        <span className="author">--{quoteObj.author}--</span>
        
    </div>


</div>
    )


}

export default QutoesRandom

