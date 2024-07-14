import './App.css'
import Header from "./component/Header.jsx";
import Editor from "./component/Editor.jsx";
import List from "./component/List.jsx";
import {createContext, useCallback, useMemo, useReducer, useRef} from "react";

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
    console.log("state", state)
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
        case "DELETE":
            return state.filter(todo => todo.id !== action.id);
        case "UPDATE":
            return state.map(todo => todo.id === action.id ? {...todo, isDone: !todo.isDone} : todo);
    }
}

function App() {

    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate = useCallback((content) => {
        console.log(todos);
        const newTodos = {
            id: idRef.current++, isDone: false, content: content, date: new Date().getTime()
        }
        dispatch({type: "CREATE", data: newTodos});

        // setTodos([newTodos, ...todos]);
    }, []);


    const onDelete = useCallback((id) => {
        dispatch({type: "DELETE", id: id});
    }, [])

    const onUpdate = useCallback((id) => {
        dispatch({type: "UPDATE", id: id});
    }, [])

    const memorizedDispatch = useMemo(() => {
        return {onCreate, onDelete, onUpdate}
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
