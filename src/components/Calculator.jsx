import React, { useState } from 'react';
import "../components/Calculator.css";

const Calculator = () => {

    const [data, setData] = useState("")

    const getValue = (e) => {

        setData(data.concat(e.target.value))
    }

    const calculation = () => {
        setData(eval(data).toString())
    }

    const clear=()=>{
         setData("")
    }
    // const [data, setData] = useState('')

    // const getValue = (e) => {
    //     setData(data.concat(e.target.value))
    // }

    // const calculation = () => {
    //     setData(eval(data).toString())
    // }

    // const clear=()=>{
    //  setData("")
    // }
    return (
        <div className='container'>
            <div>
                <input placeholder='0' id='display' value={data} />
            </div>

            <div className="buttons">
                <button className='btn' onClick={getValue} value="7">7</button>
                <button className='btn' onClick={getValue} value="8">8</button>
                <button className='btn' onClick={getValue} value="9">9</button>
                <button className='btn' onClick={getValue} value="/">/</button>
                <button className='btn' onClick={getValue} value="4">4</button>
                <button className='btn' onClick={getValue} value="5">5</button>
                <button className='btn' onClick={getValue} value="6">6</button>
                <button className='btn' onClick={getValue} value="*">*</button>
                <button className='btn' onClick={getValue} value="1">1</button>
                <button className='btn' onClick={getValue} value="2">2</button>
                <button className='btn' onClick={getValue} value="3">3</button>
                <button className='btn' onClick={getValue} value="-">-</button>
                <button className='btn' onClick={getValue} value="0">0</button>
                <button className='btn' onClick={clear} >C</button>
                <button className='btn' onClick={calculation} >=</button>
                <button className='btn' onClick={getValue} value="+">+</button>
            </div>
        </div>
    )
}

export default Calculator