import './App.css'
import Viewer from "./compoents/Viewer.jsx";
import Controller from "./compoents/Controller.jsx";
import {useEffect, useState} from "react";

function App() {

    const [count, setCount] = useState(0);
    const [inputCount, setInputCount] = useState(0);

    useEffect(() => {
        console.log(count, inputCount);

    }, [count, inputCount]);

    const onChange = (e) => {
        setInputCount(e.target.value);
    }

    const onClickButton = (value) => {
        setCount(value + count);
    }

    return (
        <div className="App">
            <h1>Simple Counter</h1>
            <section>
                <input value={inputCount} onChange={onChange}/>
            </section>
            <section>
                <Viewer count={count}/>
            </section>
            <section>
                <Controller onClick={onClickButton}/>
            </section>
        </div>
    )
}

export default App
