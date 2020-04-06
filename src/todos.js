import React from 'react'

// it is a funtional as we dont need state we pass it from the app.js
const Todos = ({todos, delteTodo})=> {
    //if a function is wrapped in {} brackets then it is automatialy invoked so
  
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div classname="collection-item" key={todo.id}>
                    <span onClick={deleteTodo(id)}>{todo.content}</span>
                </div>
                           )
        })
    ): ( <p> You have no todos to left </p>)
    return (
        <div classname = "todos collections">
            {todoList}
        </div>

    )
}

export default Todos