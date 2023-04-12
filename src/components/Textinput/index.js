import React from 'react';



const TextInput = ({label}) => {


    return (
        <>
        <label>{label}:-</label>
        <input type="text" placeholder='Enter Name'/>
        </>
    )


}

export default TextInput;



// TextInput.defaultProps = {
//     height:"50px",
//     width:"100px",
//     primary: false,
//     size: 'medium',
  
//   };