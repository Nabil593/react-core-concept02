import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);

    const handle = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const style = {
        border: "2px solid yellow"
    }
    return(
        <div style={style}>
            <h3>Count: {count}</h3>
            <button onClick={handle}>Add</button>
        </div>
    )
}