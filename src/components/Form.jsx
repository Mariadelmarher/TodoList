import React, { useState } from 'react';
import Todo from './Todo';

const Form = () => {
  // Estado del todo a ingresar - input
  const [todo, setTodo] = useState({});
  const [todoEdit, setTodoEdit] = useState({});

  // Esta es mi lista de todos
  const [todos, setTodos] = useState([
    {
      todo: 'todo 1',
      complete: false,
      edit: false
    },
  ]);

  // Esto maneja el cambio del input
  const handleChange = (e) => setTodo({ [e.target.name]: e.target.value, complete: false, edit:false });
  const editTodoChange = (e) => setTodoEdit({ [e.target.name]: e.target.value, complete: false})

  // Esto es cuando lo agrego - o doy enter
  const handleClick = (e) => {
    // Verifico que el input no este vacio
    if (Object.keys(todo).length === 0 || todo.todo.trim() === '') {
      alert('El campo no puede estar vacio.');
      return;
    }
    setTodos([...todos, todo]);
    console.log(todos);
  };

  // Elimina el todo
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completeTodo = (index) => { 
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };


  const editTodoo = (index) => {
    const newTextTodo = [...todos];
    newTextTodo[index].edit = !newTextTodo[index].edit;
    if(!newTextTodo[index].edit){
      updateEdit(index);
      return;
    } 
    console.log(editTodoo);
    setTodos(newTextTodo);
  }

  const updateEdit = (index) => {
    const newTextTodo = [...todos];
    newTextTodo.splice(index, 1, todoEdit);
    setTodos(newTextTodo);
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="container">
        <label>Agregar todo</label>
        <input type='text' name='todo' onChange={handleChange} />
        <button onClick={handleClick}>Agregar</button>
        </div>
      </form>
      {todos.map((value, index) => (
        <Todo
          todo={value.todo}
          edit={value.edit}
          key={index}
          index={index}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          editTodoo={editTodoo}
          editTodoChange={editTodoChange}
        />
      ))}
    </>
  );
};

export default Form;
