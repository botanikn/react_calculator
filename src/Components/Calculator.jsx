import React from "react";
import 'C:/tasks/react/second_mission/src/styles/style.css';
import {operations, calculations, validation} from 'C:/tasks/react/second_mission/src/scripts/main.js'

const Calculator = () => {

    return(
        <div className="calculator">
            <center>
            <div className="operations">
                <h3>Выберите операцию</h3>
                <form method="post">
                <select id="selector" onChange={operations}>
                    <option className="op1" value="op1">Операции</option>
                    <option className="op2" value="op2">Сложение</option>
                    <option className="op3" value="op3">Умножение</option>
                    <option className="op4" value="op4">Деление</option>
                    <option className="op5" value="op5">Вычитание</option>
                    <option className="op6" value="op6">Сложение строк</option>
                    <option className="op7" value="op7">Сложение массивов</option>
                    <option className="op8" value="op8">Преобразование логических значений</option>
                </select>
                </form>
            </div>
            <div className="main_part">
                <h3>Калькулятор</h3>
                
                <input type="text" id="first_meaning"/><br/>
                <span id="error_one" className="error"></span><br/>
                <span id="op"></span><br/><br/>
                <input type="text" id="second_meaning"/><br/>
                <span id="error_two" className="error"></span><br/><br/>
                <button className="count" onClick={calculations}>Посчитать</button>
            </div>
            <div className="result">
                <h3>Результат</h3>
                <p id="result_place"></p>
            </div>
            </center>
        </div>
    )
}

export default Calculator;