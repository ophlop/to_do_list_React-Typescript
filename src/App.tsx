import React, { useState} from 'react';
import {Todo} from './types' 
import './App.css';
import ToDoList from './components/ToDoList';
import NewTodoForm from './components/NewToDoForm';

function App() {

  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      complited: false,
    }
    setTodos([newTodo, ...todos]);
  }

  const toggleTodo = (id: Todo['id']) => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;

      return {
        ...todo,
        complited: !todo.complited,
      }
    }))
  }

  const removeTodo = (id: Todo['id']) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <NewTodoForm
        handleClick={ addTodo } />
      <ToDoList list={ todos }
        toggleTodo={ toggleTodo }
        removeTodo={ removeTodo }/>
    </div>
  );
}

export default App;


  //useEffect
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(res => res.json())
  //   .then((data: Todo[]) => {
  //     setTodos(data);
  //   })
  // }, [])