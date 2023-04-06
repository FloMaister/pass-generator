import { useState } from "react";

import './app.scss';

const App = (props) => {
    
    return (
        <div className="wrapper">
            <div className="item">
                <input type="text" 
                className="item__box" 
                value="Select options"/>
                <form className="item__form">
                    <label 
                    className="item__label" 
                    htmlFor="number">
                        Password length
                    </label>
                    <div className="item__wrapper-range">
                        <input 
                        className="item__input-number" 
                        type="text" name="number" 
                        id="number"
                        value="3" />

                        <input className="item__range" type="range" name="range" id="range" />
                    </div>

                    <div className="item__wrapper-numbers">
                        <label htmlFor="checkbox-number">Numbers</label>
                        <input type="checkbox" name="numbers" id="checkbox-numbers" />
                    </div>
                    
                    <div className="item__wrapper-symbols">
                        <label htmlFor="checkbox-symbols">Symbols</label>   
                        <input type="checkbox" name="symbols" id="checkbox-symbols" />
                    </div>
                    
                    <input className="item__submit" type="submit" value="Generate"/>
                </form>
            </div>
        </div>
    )
}

export default App;