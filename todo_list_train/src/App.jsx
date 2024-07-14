import './App.css'
import Header from "./component/Header.jsx";
import Editor from "./component/Editor.jsx";
import List from "./component/List.jsx";
import {createContext, useMemo, useReducer, useRef, useState} from "react";

export const ContextStateData = createContext();
export const ContextDispatchData = createContext();

const mockData = [{
    id: 0, isDone: false, content: "Study react", date: new Date().getTime()
}, {
    id: 1, isDone: false, content: "go to bed", date: new Date().getTime()
}, {
    id: 2, isDone: false, content: "play game", date: new Date().getTime()
},];


const reducer = (state, action) => {
    console.log("state",state)
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
    }
}

function App() {

    // const [todos, setTodos] = useState(mockData);
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate = (content) => {
        console.log(todos);
        const newTodos = {
            id: idRef.current++,
            isDone: false,
            content: content,
            date: new Date().getTime()
        }
        dispatch({type: "CREATE", data: newTodos});

        // setTodos([newTodos, ...todos]);
    }

    const memorizedDispatch = useMemo(() => {
        return {onCreate}
    }, []);


    console.log(todos)
    return (<div className="App">
        <Header/>
        <ContextStateData.Provider value={todos}>
            <ContextDispatchData.Provider value={memorizedDispatch}>
                <Editor/>
                <List/>
            </ContextDispatchData.Provider>
        </ContextStateData.Provider>

    </div>)
}

export default App
