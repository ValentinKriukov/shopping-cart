import React from 'react';
import {NavLink} from 'react-router-dom'

import './app-header.css';
const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Корзина покупок</h1>
            <h2>Записи   {allPosts}   Любимые продукты  {liked}</h2>
            <NavLink to='/reg'> Регистрация </NavLink>
        </div>
    )
}

export default AppHeader;