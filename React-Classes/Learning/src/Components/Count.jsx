import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)
    console.log(count); // gives 0
    function handleClick(){
        count += 1;
    }
    console.log(count, "after click");
  return (
    <>
    <div>Count: {count}</div>
    <button onClick={handleClick}></button>
    </>
  )
}

export default Count