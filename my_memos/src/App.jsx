import './App.css'
import List from "./component/List.jsx";
import {createContext, useReducer} from "react";
import mockData from "./data/MockData.jsx";

export const StateContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'CREATE':
            return state;
    }
}

function App() {

    const [memos, dispatch] = useReducer(reducer, mockData);

    return (
        <div className="App">
            <StateContext.Provider value={memos}>
                <List/>
            </StateContext.Provider>
        </div>
    )
}

export default App
