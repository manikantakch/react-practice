import React, { useEffect,useState } from 'react';
import SingleQuote from '../singleQuote';
import './style.scss'

const QuotesList = () => {

    const [quotes,setQuotes] = useState([]);



    const fetchQuotesData = () => {

        fetch('https://api.quotable.io/quotes')
        .then((res) => res.json()).
        then((res=>setQuotes(res)))
       
    }

    useEffect(() => {

        fetchQuotesData()

    },[])

    console.log("quotes", quotes);

    return (
        <>
          <div className='quote-list'>
        {quotes.results && quotes.results.map((quote) => {
            return (
              
                <SingleQuote
                key={quote._id}
                quote={quote}
                />

         
            )
        })}
               </div>

        </>
    )


}

export default QuotesList