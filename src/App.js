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

      this.completeTask = this.completeTask.bind(this);



  }

  handleInputChange(event) {
    this.setState({newTodo: event.target.value})
  }

  handleButtonClick() {
    let id = 0;
    if(this.state.newTodo) {
      if(this.state.allTodos.length) {
        id = this.state.allTodos.length
      }
      var newTask = { id, title: this.state.newTodo, completed: false }
      this.setState({
        allTodos: [...this.state.allTodos, newTask ],
        newTodo: ''
       })
    } else {
      alert("Must add new task.")
    }

  }

  deleteTask(id) {
    this.setState({ allTodos: this.state.allTodos.filter(( task ) => task.id !== id ) })
  }

  completeTask(id) {
    this.setState({
      allTodos: this.state.allTodos.map( task => {
      if( task.id === id) {
        task.completed = !task.completed;
      }
      return task;
      })
    })
  }


  render() {

    const myTodos = this.state.allTodos.map( (taskObj) => <IndividualTask
      delete={this.deleteTask}
      key={taskObj.id}
      task={taskObj}
      completed = {this.completeTask}
      />)

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
