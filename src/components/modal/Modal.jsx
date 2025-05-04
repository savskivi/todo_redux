import React from "react";
import st from './Modal.module.scss';

export default function Modal({isModalOpen, setModalOpen, setTasks, tasks, addTask, newTask, setNewTask}) {
  if (!isModalOpen) return null;

  

  return (

    <div className={st.modal}>
        <div className={st.modal__add}>
      <div className={st.task__container}>
        <h2 className={st.task__heading}>Add Task</h2>

        <form className={st.task__form} onSubmit={(e) => 
          {e.preventDefault();
        }}>
          <input
            className={st.task__input}
            type="text"
            placeholder="Title"
            value={newTask.title}
            onChange={(e) => setNewTask({...newTask, title: e.target.value})}
          />
          <input
            className={st.task__input}
            type="text"
            placeholder="Detail"
            value={newTask.subtitle}
            onChange={(e) => setNewTask({...newTask, subtitle: e.target.value})}
          />

          <button className={st.task__btn} type="submit" onClick={(e) => addTask()}>
            ADD
          </button>
        </form>
      </div>
      </div>
    </div>
  );
}
