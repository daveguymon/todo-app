import React from 'react';

const IndividualTask = (props) => {

    const completedStyle = {
      textDecoration: "line-through",
      color: "grey"
    }

      return (
        <div>
          <p style={ !props.task.completed ? null : completedStyle }>{props.task.title}</p>
          <button onClick={ ()=> props.completed(props.task.id) } disabled={ props.task.completed }>Complete</button>
          <button onClick={ () => props.delete(props.task.id) }>Remove</button>
        </div>
      )
    }



export default IndividualTask;
