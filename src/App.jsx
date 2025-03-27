import { useState } from 'react'
import './App.css'

export const App = () => {
  const [tasksArray, setTasksArray] = useState([]);
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    setTasksArray([...tasksArray, `Tarea ${tasksArray.length + 1}`]);
  };

  const handleSendTask = () => {
    if (taskText.trim() !== '') { 
      setTasksArray([...tasksArray, taskText]);
      setTaskText(''); 
    }
  };

  return (
    <>
      <button onClick={handleAddTask}>Añadir tarea</button>
      <p>Tarea creadas {tasksArray.length}</p>
      <input type="text" placeholder='Escribir tarea' value={taskText} onChange={(e) => {setTaskText(e.target.value)}} />
      <button className='button-text' onClick={handleSendTask}>Enviar tarea</button>
      <p>
        {tasksArray.map((task, index) => (
          <span key={index}>{task} <br /></span>
        ))}
      </p>
    </>
  )
}