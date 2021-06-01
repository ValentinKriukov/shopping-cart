import React from 'react';

import './app-header.css';
const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Корзина покупок</h1>
            <h2>Записи   {allPosts}   Любимые продукты  {liked}</h2>
        </div>
    )
}

export default AppHeader;