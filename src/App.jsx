import { useState } from 'react'
import './App.css'

export const App = () => {
  const [tasksArray, setTasksArray] = useState([]);

  const handleAddTask = () => {
    setTasksArray([...tasksArray, `Tarea ${tasksArray.length + 1}`]);
  };

  return (
    <>
      <button onClick={handleAddTask}>Añadir tarea</button>
      <p>Tarea creadas {tasksArray.length}</p>
      <div>{tasksArray}</div>
    </>
  )
}