import React from 'react';

const Form = (props) => {


  return (
    <div>
      <input
        value = {props.value}
        onChange={props.handleInputChange}/>
      <button onClick={props.buttonClick}>Add Task</button>
    </div>
  )
}

export default Form;
