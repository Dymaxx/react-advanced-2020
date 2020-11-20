import React from 'react';

const ErrorExample = () => {
  let  title = 'Random Title';
  

  const handleClick = () => {
    title = "Hello world"
    console.log(title)
  }

  return(
    <React.Fragment>
      <h2>{title}</h2>
      <button className='btn' type='button' onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  )
};

export default ErrorExample;
