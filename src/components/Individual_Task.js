import React, { Component } from 'react';

class IndividualTask extends Component {
  constructor(props) {
    super(props);
    this.state={
      clicked: false
    }

    this.completeTask = this.completeTask.bind(this);
  }

  completeTask() {
    this.setState({ clicked: true})
  }

  render() {
    const completedStyle = {
      textDecoration: "line-through",
      color: "grey"
    }

      return (
        <div>
          <p style={ !this.state.clicked ? null : completedStyle } >{this.props.task}</p>
          <button onClick={ this.completeTask } disabled={ this.state.clicked }>Complete</button>
          <button onClick={ () => this.props.delete(this.props.index) }>Remove</button>
        </div>
      )
    }
  }


export default IndividualTask;
