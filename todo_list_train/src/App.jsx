import './App.css'
import Header from "./component/Header.jsx";
import Editor from "./component/Editor.jsx";
import List from "./component/List.jsx";
import {createContext, useCallback, useMemo, useReducer, useRef} from "react";
import mockData from "./domain/MockData.jsx";

export const StateContext = createContext();
export const DispatchContext = createContext();


const reducer = (state, action) => {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
        case "DELETE":
            return state.filter(todo => todo.id !== action.id);
        case "UPDATE":
            return state.map(todo => (todo.id === action.id) ? {...todo, isDone: !todo.isDone} : todo);
    }
}

function App() {

    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate = useCallback((content) => {
        const newTodo = {
            id: idRef.current++,
            content: content,
            isDone: false,
            date: new Date().getTime()
        }
        dispatch({type: "CREATE", data: newTodo});
    }, []);

    const onUpdate = useCallback((id) => {
        dispatch({type: "UPDATE", id: id})
    }, [])

    const onDelete = (id) => {

        dispatch({type: "DELETE", id: id});

    }

    const disPatchFunc = useMemo(() => {
        return {
            onCreate, onDelete, onUpdate
        }
    }, [])


    return (
        <div className="App">
            <Header/>
            <StateContext.Provider value={todos}>
                <DispatchContext.Provider value={disPatchFunc}>
                    <Editor/>
                    <List/>
                </DispatchContext.Provider>
            </StateContext.Provider>

        </div>);

}

export default App
