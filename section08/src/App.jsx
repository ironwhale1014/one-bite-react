import './App.css'
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
import {useRef, useState} from "react";

const mockData = [
    {
        id: 0,
        isDone: false,
        content: "Study react",
        date: new Date().getTime()
    },
    {
        id: 1,
        isDone: false,
        content: "go to bed",
        date: new Date().getTime()
    },
    {
        id: 2,
        isDone: false,
        content: "play game",
        date: new Date().getTime()
    },


];


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

    const onDelete = (targetId) => {
        setTodos(todos.filter(todo => todo.id !== targetId));
    }


    const onUpdate = (targetId) => {
        setTodos(todos.map((todo) => (todo.id === targetId
            ? {...todo, isDone: !todo.isDone}
            : todo)));
    }

    return (
        <div className="App">
            <Header/>
            <Editor onCreate={onCreate}/>
            <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
        </div>
    )
}

export default App
