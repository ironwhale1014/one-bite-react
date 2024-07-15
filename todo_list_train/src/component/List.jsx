import "./List.css"
import TodoCard from "./TodoCard.jsx";
import {useCallback, useContext, useState} from "react";
import {StateContext} from "../App.jsx";

const List = () => {

    const todos = useContext(StateContext);
    const [search, setSearch] = useState("");


    const onSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFilteredTodos = () => {
        if (search === "") {
            return todos;
        }
        return todos.filter((todo) => {
            return todo.content.toLowerCase().includes(search.toLowerCase());
        })
    }

    const fiteredTodos = getFilteredTodos();

    return (
        <div className="List">
            <h4>ToDo List🌱</h4>
            <input placeholder="검색어를 입력하세요" onChange={onSearch}/>
            <div className="wrapper-todos">

                {fiteredTodos.map((todo) => {
                    return <TodoCard key={todo.id} {...todo} />;
                })}

            </div>
        </div>);
}
export default List;