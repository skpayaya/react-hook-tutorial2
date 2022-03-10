import React, { MouseEventHandler, useState } from "react";

const CounterCustomHook = () => {
    const [count, increment, decrement, reset] = useCounter(9);
    return (
        <div>
            {count}
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};
const useCounter = (
    initialCount = 0
): [number, MouseEventHandler, MouseEventHandler, MouseEventHandler] => {
    const [count, setCount] = useState(initialCount);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    const reset = () => {
        setCount(0);
    };
    return [count, increment, decrement, reset];
};

export default CounterCustomHook;
