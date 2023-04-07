import { useState } from "react";

import SelectValue from "../selectValue/selectValue";
import IncorrectValue from "../incorrectValue/incorrectValue";

import './app.scss';

const App = () => {
    let [number, setNumber] = useState(5);

    function handleChange(e) {
        setNumber(number = e.target.value)
    }

    return (
        <div className="wrapper">
            <div className="item">
                <input type="text" className="item__box" value='Заглушка'/>
                <form className="item__form">
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
                        maxLength={6} />
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
                    <Validator number={number}/>
                    <div className="item__wrapper-numbers">
                        <label htmlFor="checkbox-number">Numbers</label>
                        <input className="item__checkbox-numbers" type="checkbox" name="numbers" id="checkbox-numbers" />
                    </div>
                    
                    <div className="item__wrapper-symbols">
                        <label htmlFor="checkbox-symbols">Symbols</label>   
                        <input className="item__checkbox-symbols" type="checkbox" name="symbols" id="checkbox-symbols" />
                    </div>
                    
                    <input className="item__submit" type="submit" value="Generate"/>
                </form>
            </div>
        </div>
    )
}

const Validator = (props) => {
    const {number} = props;
 
    if (number > 16 || number < 4) {
        return <IncorrectValue/>
    } else {
        return <SelectValue/>
    }
}

export default App;