import React from "react";
import { useObserver, useLocalStore } from "mobx-react-lite";

function Counter() {
    const counter = useLocalStore(() => ({
        number: 0,
        increase() {
            counter.number++;
        },
        decrease() {
            counter.number--;
        }
    }));
    return useObserver(() => (
        <div>
            <h1>{counter.number}</h1>
            <button onClick={counter.increase}>+1</button>
            <button onClick={counter.decrease}>-1</button>
        </div>
    ))
}

export default Counter;