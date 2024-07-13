import "./List.css"
import TodoItem from "./TodoItem.jsx";
import {useContext, useMemo, useState} from "react";
import { TodoStateContext} from "../App.jsx";

const List = () => {

    const todos = useContext(TodoStateContext);

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
    const {totalCount, isDoneCount, isNotDoneCount} = useMemo(() => {
        const totalCount = todos.length;
        const isDoneCount = todos.filter((todo) => todo.isDone).length;
        const isNotDoneCount = totalCount - isDoneCount;

        return {
            totalCount: totalCount, isDoneCount: isDoneCount, isNotDoneCount: isNotDoneCount
        };
    }, [todos])

    return (<div className="List">
        <h4>오늘 할일은 🌱</h4>
        <div>
            <div>total {totalCount}</div>
            <div>isDoneCount {isDoneCount}</div>
            <div>isNotDoneCount {isNotDoneCount}</div>
        </div>
        <input placeholder="검색어를 입력하세요" value={search} onChange={onChangeSearch}/>
        <div className="todos-wrapper">
            {filteredTodos.map(todo => {
                return <TodoItem key={todo.id} {...todo}/>
            })}
        </div>
    </div>);
}

export default List;