import React, { useState } from 'react'

const MultiCounter = () => {
    const [count, setCount] = useState([0, 0]);
    console.log(count);
    const increment = (index) => {
        setCount((prev) => {
            const newCount = [...prev];
            console.log(newCount); // [0,0]
            newCount[index] += 1;
            return newCount
        })
    }
    const decrement = (index) => {
        setCount((prev) => {
            const newCount = [...prev]
            newCount[index] -= 1
            return newCount
        })
    }
    return (
        <div>
            {count.map((counter, index) => (
                <div key={index}>
                    <h1> count:{counter}</h1>
                    <button onClick={() => increment(index)}>increment</button>
                    <button onClick={() => decrement(index)}>decrement</button>
                </div>
            ))}
        </div>
    )
}

export default MultiCounter