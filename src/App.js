import React, { Component } from 'react'
import Todos from './todos'
class App extends Component {
  state = {
    todos:[
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'buy some cololate'}
    ]
  }
deleteTodo= (id)=>{
  console.log(id); 
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
