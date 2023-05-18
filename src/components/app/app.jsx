import React from 'react';
import { useState, useEffect } from "react";

import IncorrectValue from '../incorrectValue/incorrectValue';
import SelectValue from '../selectValue/selectValue';

import './app.scss';

const App = () => {
    const randomNumber = Math.floor(Math.random() * 11) + 6;
    const [number, setNumber] = useState(randomNumber);
    const [password, setPassword] = useState();
    const [checkNum, setCheckNum] = useState(false);
    const [checkSymb, setCheckSymb] = useState(false);
    const [clickPass, setClickPass] = useState(false);

    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    useEffect(() => {
        generatePassword(number);
    },[number, checkNum, checkSymb]);

    //Функция для срабатывания checkbox
    function isCheckedNum() {
        setCheckNum(checkNum => checkNum = !checkNum);
    }

    //Функция для срабатывания checkbox
    function isCheckedSymb() {
        setCheckSymb(checkSymb => checkSymb = !checkSymb);
    }

    // Функция для отслеживания значения в input'е
    function handleChange(event) {
        if (event.target.value <= 9999) {
            setNumber(number => number = event.target.value)
        }
    }

    // Функция для отмены сброса значения при отправке формы
    function handleSubmit(event) {
        event.preventDefault();
    }

    // Функция для копирования текста
    function handleCopy(event) {
        if (event.target.value) {
            event.target.select();
            navigator.clipboard.writeText(event.target.value);
            setTimeout(() => setClickPass(clickPass => clickPass = !clickPass), 300);
            setTimeout(() => setClickPass(clickPass => clickPass = !clickPass), 3000);
        }
    }

    // Генерация пароля
    const generatePassword = (numb) => {
        if(checkNum) {
            str += '0123456789';
        }

        if(checkSymb) {
            str += '!@#$%^&*()_+-=[]{}<>/?';
        }

        for (let i = 0; i < numb; i++) {
            result += str.charAt(Math.floor(Math.random() * str.length));
        }

        setPassword(password => password = result);
    }

    return (
        <div className="wrapper">
            <div className="item">
                <input 
                type="text" 
                className="item__box" 
                value={password} 
                form="submit"
                defaultValue={password}
                readOnly
                onClick={handleCopy}/>
                {clickPass ? <div className='copy'>Сopy successful!</div> : null}
                <form className="item__form" onSubmit={handleSubmit}>
                    <label className="item__label" htmlFor="number">
                        Password length
                    </label>
                    <div className="item__wrapper-range">
                        <input 
                        className="item__input-number" 
                        type="number" 
                        name="number" 
                        id="number"
                        value={number}
                        onChange={handleChange}
                        pattern="[0-9]"
                        placeholder="Number"
                        maxLength={4}
                        min={6}
                        max={16}
                        inputMode='numeric' />
                        <input 
                        className="item__range" 
                        type="range" 
                        name="range" 
                        id="range"
                        value={number}
                        onChange={handleChange}
                        min={6}
                        max={16} />
                    </div>
                    {number === '' ? <IncorrectValue/> : null}
                    {(number < 6 && number > 0) || number > 16 ? <SelectValue/> : null}
                    <div className="item__wrapper-numbers">
                        <label htmlFor="checkbox-number">Numbers</label>
                        <input 
                        className="item__checkbox-numbers" 
                        type="checkbox" 
                        name="numbers" 
                        id="checkbox-numbers"
                        onClick={isCheckedNum} />
                    </div>
                    
                    <div className="item__wrapper-symbols">
                        <label htmlFor="checkbox-symbols">Symbols</label>   
                        <input 
                        className="item__checkbox-symbols" 
                        type="checkbox" 
                        name="symbols" 
                        id="checkbox-symbols"
                        onClick={isCheckedSymb} />
                    </div>
                    
                    <input 
                    id="submit" 
                    className="item__submit" 
                    type="submit" 
                    value="Generate" 
                    onClick={() => generatePassword(number)}/>
                </form>
            </div>
        </div>
    )
}

export default App;