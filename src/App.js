//USING todo_app_assessment as a guide


import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import IndividualTask from './components/Individual_Task';

class App extends Component {
  constructor(props) {
    super(props);
      this.state={
        allTodos: [],
        newTodo: '',
        styling: false
      }

      this.handleInputChange = this.handleInputChange.bind(this);

      this.handleButtonClick = this.handleButtonClick.bind(this);

      this.deleteTask = this.deleteTask.bind(this);


  }

  handleInputChange(event) {
    this.setState({newTodo: event.target.value})
  }

  handleButtonClick() {
    if(this.state.newTodo) {
      this.setState({
        allTodos: [...this.state.allTodos, this.state.newTodo],
        newTodo: ''
       })
    } else {
      alert("Must add new task.")
    }

  }

  deleteTask(i) {
    this.setState({ allTodos: this.state.allTodos.filter(( task, index ) => index !== i ) })
  }


  render() {

    const myTodos = this.state.allTodos.map( (task, i) => <IndividualTask
      delete={this.deleteTask}
      key={i}
      index={i}
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
