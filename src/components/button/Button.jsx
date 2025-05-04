import React from 'react'
import st from './Button.module.scss';

export default function ({openModalAdd}) {
  return (
    <div>
        <button className={st.btn__addTask} onClick={(e) => openModalAdd()}>+</button>
    </div>
  )
}
