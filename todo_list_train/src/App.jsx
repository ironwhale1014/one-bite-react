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

function App() {

    const [todos, setTodos] = useState(mockData);
    const idRef = useRef(3);

    const onCreate = (content) => {
        const newTodos = {
            id: idRef.current++,
            isDone: false,
            content: content,
            date: new Date().getTime()
        }
        setTodos([newTodos, ...todos]);
    }

    const memorizedDispatch = useMemo(() => {
        return {onCreate}
    }, []);

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
