import { useState, useEffect } from "react";

import  Message  from '../message/message';

import './app.scss';

const App = () => {
    let [number, setNumber] = useState(8);
    let [password, setPassword] = useState();
    let [checkNum, setCheckNum] = useState(false);
    let [checkSymb, setCheckSymb] = useState(false);

    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    useEffect(() => {
        generatePassword(number);

    },[number]);


    //Функции для checkbox
    function isCheckedNum() {
        setCheckNum(checkNum = !checkNum);
    }

    function isCheckedSymb() {
        setCheckSymb(checkSymb = !checkSymb);
    }

    // Функция для отслеживания значения в input'е
    function handleChange(event) {
        setNumber(number = event.target.value)
    }

    // Функция для отмены сброса значения при отправке формы
    function handleSubmit(event) {
        event.preventDefault();
    }

    // Функция для копирования текста
    function handleCopy(event) {
        event.target.select();
        navigator.clipboard.writeText(event.target.value);
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
                        pattern="[0-9]{4,16}"
                        placeholder="Число"
                        maxLength={6}
                        min={4}
                        max={16} />
                        <input 
                        className="item__range" 
                        type="range" 
                        name="range" 
                        id="range"
                        value={number}
                        defaultValue={number}
                        onChange={handleChange}
                        min={4}
                        max={16} />
                    </div>
                    <Message number={number}/>
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