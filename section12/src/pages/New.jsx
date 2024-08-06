import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {DiaryDispatchContext} from "../App.jsx";

const New = () => {

    const nav = useNavigate();
    const {onCreate} = useContext(DiaryDispatchContext)

    const onSubmit = (input) => {
        onCreate(input.createDate.getTime(), input.emotionId, input.content);
        nav("/", {replace: true});
    }

    return (
        <div className="new">
            <div className="header">
                <Header title={"새 일기 쓰기"}
                        leftChild={<Button text={"< 뒤로 가기"} onClick={() => {
                            nav(-1)
                        }}/>}/>
            </div>
            <div className="Editor">
                <Editor onSumbit={onSubmit}/>
            </div>
        </div>
    );
}

export default New;