import React from "react";
import st from './Header.module.scss';
import calendarIcon from '../../assets/calendar_icon.svg';

export default function Header() {
  return (
    <header className={st.root}>
      <div className={st.header__container}>
        <h1 className={st.header__title}>TODO LIST</h1>
        <button className={st.header__button}>
          <img src={calendarIcon} alt="calendar icon" />
        </button>
      </div>
    </header>
  );
}
