import React from 'react'
import { TodoApp } from './TodoApp'
import styles from './App.module.css'

 const App = () => {
  return (
   <div>
     <header className={styles.header}>
      <p className={styles.appTitle}> Todo App</p>
     </header>
     <TodoApp/>
   </div>
  )
}
export default App;
