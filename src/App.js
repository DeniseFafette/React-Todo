import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
 const tasks = [

            {
              task: 'Buy Flour, Butter, Brown Sugar',
              id: '',
              completed: false
            },
            {
              task: 'Bake Cookies',
              id: '',
              completed: false
            },
            {
              task: 'Take Cookies to Neighbor',
              id: '',
              completed: false
            }
          ];

  class App extends React.Component {
    //Constructor with state
    constructor() {
      //Initialize state
      super();
      this.state = {
        tasks: tasks,
        newTask: ''
      };
    }
  
  handleChanges = event => {
      //update state with each keystroke
      this.setState({ newTask: event.target.value });
  };
  //class property to submit form
  handleSubmit = event => {
      event.preventDefault();
      this.props.addTask(this.state.newTask);
      this.setState({
          newTask: ''
      });
  }

  addTask = newTaskText => {
    const newTask = {
      task: newTaskText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

  render() {
    console.log('rendering...')
    return (
      <div>
        <h2>Welcome to your Task App!</h2>
        <TodoForm />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
