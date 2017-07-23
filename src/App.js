//USING todo_app_assessment as a guide


import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Individual_Task from './components/Individual_Task';

class App extends Component {
  constructor(props) {
    super(props);
      this.state={
        allTodos: [],
        newTodo: ''
      }

      this.handleInputChange = this.handleInputChange.bind(this);

      this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleInputChange(event) {
    this.setState({newTodo: event.target.value})
  }

  handleButtonClick() {
    this.setState({
      allTodos: [...this.state.allTodos, this.state.newTodo],
      newTodo: ''
     })
  }

  render() {

    const myTodos = this.state.allTodos.map( (task, index) => <Individual_Task
      key={index}
      index={index}
      task={task}/>)

    return (
      <div className="App">
        <h1>My Todo List App</h1>
        <Form
          value = {this.state.newTodo}
          buttonClick={this.handleButtonClick}
          handleInputChange={this.handleInputChange}/>
        { myTodos }
      </div>
    );
  }
}

export default App;
