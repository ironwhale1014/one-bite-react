import "./MemoInput.css"
import Button from "./Button.jsx";


const MemoInput = () => {

    return (
        <div className="MemoInput">
            <input className="memo" placeholder="메모를 입력해주세요"/>
            <input className="user" placeholder="작성자를 입력해주세요"/>
            <Button text={"저장"} type={"POSITIVE"}/>
        </div>
    );
}

export default MemoInput;