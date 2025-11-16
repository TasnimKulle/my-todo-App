import React, { useReducer } from "react";
import TodoContext from "./TodoContext";
import { reducer, initialSatat } from "./reducer";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import styles  from "./TodoApp.module.css"

export const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialSatat);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div  className={styles.appContainer}>
        {/* TODO APP with useContext And useReducer */}
        <TodoForm />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
};
