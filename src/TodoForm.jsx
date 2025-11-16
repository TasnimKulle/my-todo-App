import React, { useContext, useState } from 'react'
import TodoContext from './TodoContext';
import styles from "./TodoFrom.module.css";

export const TodoForm = () => {
  const [text,setText]=useState('');
  const{dispatch}=useContext(TodoContext)
  const handleAdd =()=>{
    if(text.trim()){
      const newTodo ={
        id:crypto.randomUUID(),
        text,
        completed:false
      }
      dispatch({type:'add',payload:newTodo})
       setText(''); 
    }

  }
    return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Todo List</h1>
     <div className={styles.formGroup}>
       <input type="text"
      value={text}
      className={styles.input} 
      onChange={(e)=>setText(e.target.value)}
      placeholder='Enter New To Do'
      />
      <button onClick={handleAdd}
      className={styles.button}
      >Add</button>
     </div>
    </div>
  )
}
