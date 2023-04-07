import React from 'react';
import { useState, useEffect } from "react";

import  Message  from '../message/message';
import IncorrectValue from '../incorrectValue/incorrectValue';

import './app.scss';

const App = () => {
    let [number, setNumber] = useState(8);
    let [password, setPassword] = useState();
    let [checkNum, setCheckNum] = useState(false);
    let [checkSymb, setCheckSymb] = useState(false);
    let [clickPass, setClickPass] = useState(false);
    let [numPass, setNumPass] = useState(true);

    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    useEffect(() => {
        generatePassword(number);
    },[number]);

    //Функция для срабатывания checkbox
    function isCheckedNum() {
        setCheckNum(checkNum = !checkNum);
    }

    //Функция для срабатывания checkbox
    function isCheckedSymb() {
        setCheckSymb(checkSymb = !checkSymb);
    }

    // Функция для отслеживания значения в input'е
    function handleChange(event) {
        if (event.target.value <= 9999) {
            setNumber(number = event.target.value)
        }

        if (number) {
            setNumPass(numPass = true);
        } else {
            setNumPass(numPass = false);
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
            setTimeout(() => setClickPass(clickPass = !clickPass), 300);
            setTimeout(() => setClickPass(clickPass = !clickPass), 3000);
        }
    }

    // Генерация пароля
    function generatePassword(numb) {
        if(checkNum) {
            str += '0123456789';
        }

        if(checkSymb) {
            str += '!@#$%^&*()_+-=[]{}<>/?';
        }

        for (let i = 0; i < numb; i++) {
            result += str.charAt(Math.floor(Math.random() * str.length));
        }

        setPassword(password = result);
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
                        defaultValue={number}
                        onChange={handleChange}
                        pattern="[0-9]"
                        placeholder="Number"
                        maxLength={4}
                        min={6}
                        max={16} />
                        <input 
                        className="item__range" 
                        type="range" 
                        name="range" 
                        id="range"
                        value={number}
                        defaultValue={number}
                        onChange={handleChange}
                        min={6}
                        max={16} />
                    </div>
                    {numPass ? <Message number={number}/> : <IncorrectValue/>}
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