import "./List.css"
import TodoItem from "./TodoItem.jsx";
import {useContext} from "react";
import {ContextStateData} from "../App.jsx";

const List = () => {

    const todos = useContext(ContextStateData);


    return (<div className="list">
        <h4>오늘의 할일🌱</h4>
        <input placeholder="검색어를 입력하세요"/>
        <div className="todos-wrapper">
            {todos.map((item) => <TodoItem key={item.id} {...item}/>)}
        </div>
    </div>);
}

export default List;