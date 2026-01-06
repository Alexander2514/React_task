import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import React from 'react';//revision

const defaultTodos = [{ text: 'Cortar cebolla', completed: true },
{ text: 'Tomar el curso de intro a React', completed: false },
{ text: 'Llorar con la llorona', completed: false },
{ text: 'Ver a los Vengadores', completed: false },
{ text: 'Comprar pan', completed: true }];



function App() {
  return (
    <React.Fragment>

      <TodoCounter completedTodos={2} totalTodos={45}/>
      <TodoSearch/>
      <TodoList>
      
     {defaultTodos.map(todo => (
      <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
     ))}
   </TodoList>

     


    <CreateTodoButton/>
    </React.Fragment>
     
  );
}





export default App;
