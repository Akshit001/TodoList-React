import React, { Component } from 'react'
import Todos from './todos'
class App extends Component {
  state = {
    todos:[
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'buy some cololate'}
    ]
  }
deleteTodo= (id) =>{
  console.log("delete invoked  " + id); 
  const todos = this.state.todos.filter( todo => {
    return todo.id !== id
  });
  this.setState({
    todos: todos
    // when the key and value both are same then we can go like 
    // todos
  })
}
  render() {
    return (
  <div className= "App container">
    <h1  className="center blue-text">TODOS LIST</h1>
    <Todos todos={this.state.todos} deleteTodo ={this.deleteTodo}/>

  </div>
    );
  }

}
  

export default App;
