import React from 'react';

const Todo = ({ todo, index, deleteTodo, completeTodo, edit, editTodoo, editTodoChange }) => {
  return (
    <>
      <div className='list'>
        {edit ? (<input type= "text" name='todo' onChange={editTodoChange}/>): 
        (<h3>{todo}</h3>)}
        <button className='btn-delete' onClick={() => deleteTodo(index)}>
          x
        </button>
        {!edit ? (<button className= 'btn-edit' onClick={() => editTodoo(index)} >Edit </button>):
        (<button className= 'btn-actualizar' onClick={() => editTodoo(index)} >Actualizar</button>) }
        <input className='btn-check' type="checkbox" onClick={() => completeTodo(index)}/>
      </div>
    </>
  );
};

export default Todo;
