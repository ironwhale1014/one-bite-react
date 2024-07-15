import {useContext} from "react";
import {StateContext} from "../App.jsx";
import "./List.css"
import MemoCard from "./MemoCard.jsx";

const List = () => {

    const memos = useContext(StateContext);
    return (
        <div className="list">
            <div className="tbl_head">
                <div className="memo">메모내용</div>
                <div className="date">날짜</div>
                <div className="isActive">완료여부</div>
            </div>
            <div className="items">

                {memos.map((item) => {
                    return <MemoCard key={item.id} {...item}/>
                })}
            </div>
        </div>
    );
}
export default List;