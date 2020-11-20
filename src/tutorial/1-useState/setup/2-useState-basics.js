import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text,setText] = useState('Random Title')

  const handleClick = () => {
    if (text === 'Random Title'){
      setText('Hello people')
    }else{
      setText('Random Title')
    }
    

    
  }

  return(
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" type='button' onClick={handleClick}>Change the title</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
