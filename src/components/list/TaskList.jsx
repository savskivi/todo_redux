import React from "react";
import st from "./TaskList.module.scss";
import completeIcon from "../../assets/complete_icon.svg";
import editIcon from "../../assets/edit_icon.svg";
import deleteIcon from "../../assets/delete_icon.svg";

export default function TaskList({ tasks }) {
  return (
    <main className={st.root}>
      <div className={st.main__container}>
        <ul className={st.list__container}>
          {tasks.map((task) => (
            <li className={st.task__container} key={task.id}>
              <div className={st.task__content}>
                <h3 className={st.task__title}>{task.title}</h3>
                <p className={st.task__subtitle}>{task.subtitle}</p>
              </div>

              <div className={st.task__buttons}>
                <button className={st.tasks__editIcon}>
                  <img src={editIcon} alt="edit task icon" />
                </button>
                <button className={st.tasks__deleteIcon}>
                  <img src={deleteIcon} alt="delete task icon" />
                </button>
                <button className={st.tasks__completeIcon}>
                  <img src={completeIcon} alt="task completed icon" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
