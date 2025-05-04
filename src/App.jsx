import { useState } from 'react'
import './App.css'
import Button from './components/button/Button'
import Header from './components/header/Header'
import TaskList from './components/list/TaskList'
import Modal from './components/modal/Modal'

function App() {

  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({title: '', subtitle: ''});

  function openModalAdd(){
    setModalOpen(true);
  }

  function addTask(){
    if (newTask.title && newTask.subtitle){
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: newTask.title,
        subtitle: newTask.subtitle,
        complete: false
      }
    ])
    setNewTask({title: '', subtitle: ''})
    setModalOpen(false);
  }}
  



  return (
    <>
      <Header/>
      <TaskList tasks={tasks}  />
      <Button openModalAdd={openModalAdd}/>
      <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} setTasks={setTasks} tasks={tasks} addTask={addTask} newTask={newTask} setNewTask={setNewTask}/>
    </>
  )
}

export default App
