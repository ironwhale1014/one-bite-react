import "./List.css"
import TodoItem from "./TodoItem.jsx";
import {useState} from "react";

const List = ({todos, onUpdate, onDelete}) => {

    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFilteredTodos = () => {

        if (search === "") {
            return todos;
        }

        return todos.filter((todo) => {

            return todo.content.toLowerCase().includes(search.toLowerCase());
        });
    }

    const filteredTodos = getFilteredTodos();

    return (<div className="List">
        <h4>오늘 할일은 🌱</h4>
        <input placeholder="검색어를 입력하세요" value={search} onChange={onChangeSearch}/>
        <div className="todos-wrapper">
            {filteredTodos.map(todo => {
                return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>
            })}
        </div>
    </div>);
}

export default List;