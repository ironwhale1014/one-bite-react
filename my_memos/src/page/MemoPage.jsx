import Header from "../component/Header.jsx";
import MemoInput from "../component/MemoInput.jsx";
import List from "../component/List.jsx";
import {useContext} from "react";
import {StateContext} from "../App.jsx";

const MemoPage = () => {


    const memos = useContext(StateContext);
    return (
        <div>
            <Header title={"메모장"}/>
            <MemoInput/>
            <List values={memos}/>
        </div>
    );
}

export default MemoPage;