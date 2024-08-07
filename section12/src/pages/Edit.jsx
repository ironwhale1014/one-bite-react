import Header from "../components/Header.jsx";
import Editor from "../components/Editor.jsx";
import Button from "../components/Button.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {DiaryDispatchContext, DiaryStateContext} from "../App.jsx";


const Edit = () => {

    const nav = useNavigate();
    const params = useParams();
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();

    const onClickDelete = () => {
        if (window.confirm("삭제 할까요?")) {
            onDelete(params.id);
            nav("/", {replace: true});
        }
    }

    const onSubmit = (input) => {
        if (window.confirm("수정할까요??")) {
            onUpdate(params.id, input.createDate.getTime(), input.emotionId, input.content);
            nav("/", {replace: true});
        }


    }


    useEffect(() => {
        const currentDiaryItem = data.find(item => String(item.id) === String(params.id));
        if (!currentDiaryItem) {
            window.alert("존재 하지 않는 일기 입니다.");
            nav("/", {replace: true});
        }
        setCurDiaryItem(currentDiaryItem);
    }, [params.id, data]);


    return (<div>
        <Header
            title="일기 수정하기"
            leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)}/>}
            rightChild={<Button text={"삭제 하기"} type={"NEGATIVE"} onClick={onClickDelete}/>}/>
        <Editor initData={curDiaryItem} onSumbit={onSubmit}/>
    </div>);
}

export default Edit;