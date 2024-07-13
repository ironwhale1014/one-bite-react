import './App.css'
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
import {useCallback, useReducer, useRef} from "react";

const mockData = [{
    id: 0, isDone: false, content: "Study react", date: new Date().getTime()
}, {
    id: 1, isDone: false, content: "go to bed", date: new Date().getTime()
}, {
    id: 2, isDone: false, content: "play game", date: new Date().getTime()
},


];

const reducer = (state, action) => {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state]
        case "DELETE":
            return state.filter((item => item.id !== action.targetId));
        case "UPDATE":
            return state.map((item) => (item.id === action.targetId ? {...item, isDone: !item.isDone} : item));
    }


}


function App() {

    const [todos, dispatch] = useReducer(reducer, mockData)
    const idRef = useRef(3);

    console.log(todos)

    const onCreate = (content) => {
        const newTodos = {
            id: idRef.current++, isDone: false, content: content, date: new Date().getTime()
        }
        dispatch({type: "CREATE", data: newTodos})
    }

    const onDelete = useCallback((targetId) => {
        dispatch({type: "DELETE", targetId: targetId});
    }, [])


    const onUpdate = useCallback((targetId) => {

        console.log(targetId);
        dispatch({type: "UPDATE", targetId: targetId});
    }, [])


    return (<div className="App">
        <Header/>
        <Editor onCreate={onCreate}/>
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>)
}

export default App
