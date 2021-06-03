import React from 'react';
import './registration.css';

const Registrathion =()=>{
    return (
        <div className='reg'>
            <h1>Регистрация</h1>
            <form>
                <input name='email' type='text' placeholder='Enter your email...'/>
                <input name='password' type='password' placeholder='Enter your password...'/>
                <button> Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default Registrathion;