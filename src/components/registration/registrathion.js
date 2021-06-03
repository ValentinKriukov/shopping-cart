import React from 'react';
import './registration.css';

const Registrathion =()=>{
    return (
        <div className='reg'>
            <h1>Регистрация</h1>
            <form>
                <br />
                <input className='email' type='text' placeholder='Логин'/>
                <br />
                <input className='password' type='password' placeholder='Пароль'/>
                <br />
                <button> Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default Registrathion;