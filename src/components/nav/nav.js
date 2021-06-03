import React from 'react';
import {NavLink} from 'react-router-dom';
import "./nav.css";

const Nav =()=>{
    return(
      <>
        <div className="nav">
        <NavLink to="/main">Главная</NavLink>
        &nbsp;
        &nbsp;
        <NavLink to="/reg">Регистрация</NavLink>
      </div>
      </>
    )
}

export default Nav;