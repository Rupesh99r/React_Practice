import React, { useState } from 'react';
const State = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount((Prevcount) => Prevcount + 1);
        //setCount(count + 1);
        setCount((Prevcount) => Prevcount + 1);
    }
    const decrement = () => {
        if (count !== 0)
            setCount(count - 1);
    }
    return (
        <div >
            <button onClick={increment}>+</button>
            <span>{count}</span>
            <button onClick={decrement}>-</button>
        </div>
    );
}
export default State;
