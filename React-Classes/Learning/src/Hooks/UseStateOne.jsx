import React, { useState } from 'react'

const UseStateOne = () => {
    const [count, setCount] = useState(0);
    function decrease(){
        setCount(count - 1);
    }
    function reset(){
        setCount(0);
    }
    return (
        <>
            <div>UseStateOne</div>
            <h3>Count: {count}</h3>
            <button onClick={decrease}>Decrease</button> <br />
            <button onClick={() => setCount(count + 1)}>Increase</button> <br />
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default UseStateOne