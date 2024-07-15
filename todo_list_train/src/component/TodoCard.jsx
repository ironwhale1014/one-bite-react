import "./TodoCard.css"
import {memo, useContext} from "react";
import {DispatchContext} from "../App.jsx";

const TodoCard = ({content, date, id,isDone}) => {

    const {onDelete, onUpdate} = useContext(DispatchContext)

    const onClick = () => {
        onDelete(id)
    }

    const onClickUpdate = () => {
        console.log(id,isDone)
        onUpdate(id)
    }

    return (
        <div className="todo-card">
            <input type="checkbox" checked={isDone} onChange={onClickUpdate}/>
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button className="delete" onClick={onClick}>삭제</button>
        </div>
    );
}

export default memo(TodoCard);