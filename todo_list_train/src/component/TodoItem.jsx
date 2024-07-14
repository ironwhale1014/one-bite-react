import "./TodoItem.css"
import {memo, useContext} from "react";
import {ContextDispatchData} from "../App.jsx";


const TodoItem = ({id, isDone, content, date}) => {

    const {onDelete, onUpdate} = useContext(ContextDispatchData);


    const onClickDeleteButton = () => {
        onDelete(id);
    }

    const onClickCheckBox = () => {
        onUpdate(id);
    }

    return (
        <div className="todo-item">
            <input onClick={onClickCheckBox} checked={isDone} type='checkbox'/>
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );

}


export default memo(TodoItem);