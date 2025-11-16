import React, { useContext } from "react";
import TodoContext from "./TodoContext";
import styles from "./TodoItems.module.css";
export const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  const handleToggle=()=>{
    dispatch({ type: "toggle", payload: todo.id })
  }

  return (
    <li className={styles.listItems}>
      <input 
      type="checkbox"
      checked={todo.completed} 
      className={styles.checkbox} 
      onChange={handleToggle}/>
      <span 
        className={`${styles.textTodo} ${todo.completed ? styles.completed :''}`}
        onClick={handleToggle}
      >
        {todo.text}
      </span>
      <button
      className={`${styles.buttonActive} ${todo.completed ? '' : styles.buttonInActive  }`}
       
        onClick={() =>
          dispatch({
            type: "delete",
            payload: todo.id,
          })
        }
      >
        Delete
      </button>
    </li>
  );
};
