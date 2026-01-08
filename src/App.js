import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import React from 'react';//revision

const defaultTodos = [{ text: 'Afilar la espada de acero antes del amanecer', completed: true },
  { text: 'Entregar el mensaje sellado al Gran Maestro', completed: false },
  { text: 'Escoltar la caravana por el Paso de los Bandidos', completed: false },
  { text: 'Recolectar hierbas medicinales en el Bosque Susurrante', completed: true },
  { text: 'Pagar el tributo de diezmos al recaudador real', completed: false },
  { text: 'Cazar el jabalí que acecha los cultivos de la villa', completed: false },
  { text: 'Descifrar el antiguo grimorio de la biblioteca olvidada', completed: false },
  { text: 'Abastecer la despensa con sacos de grano y cecina', completed: true }];



function App() {
  const [todos,setTodos] = React.useState(defaultTodos);

  const [SearchValue, setSearchValue] = React.useState('');
  console.log('User: ',SearchValue);

  const completedTodos= todos.filter(todos => (!!todos.completed)).length;
  const totalTodos= todos.length;

  const searchedtodos = todos.filter((Todo) => {
    return Todo.text.toLowerCase().includes(SearchValue.toLowerCase())
  })


  const CompleteTodo= (todoText) => {
    const newTodos= [...todos];
    const todoIndex= newTodos.findIndex((todo) => todo.text === todoText);
    newTodos[todoIndex].completed=true


    setTodos(newTodos);
  }

  const DeleteTodo= (todoText) => {
    //localizacion de elementos en la lista , y copia de los todos en uno nuevo
    const newTodos= [...todos];
    const todoIndex= newTodos.findIndex((todo) => todo.text === todoText);

    //eliminacion del todo en la lista 
    newTodos.splice(todoIndex,1);
    //marcando estado actual de nuestro componente que seria la nueva lista
    setTodos(newTodos);
  }



  return (
    <React.Fragment>

      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos}/>
      <TodoSearch
        value= {SearchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
      
     {searchedtodos.map((todo) => (
      <TodoItem key={todo.text} text={todo.text} completed={todo.completed}
      // forma de pasarle una funcion a un componente sin ejecutarla
      onComplete= {() => CompleteTodo(todo.text)}
      onDelete= {() => DeleteTodo(todo.text)}
      />
      
     ))}



   </TodoList>

     


    <CreateTodoButton/>
    </React.Fragment>
     
  );
}





export default App;
