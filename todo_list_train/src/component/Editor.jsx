import "./Editor.css"
import {useContext, useRef, useState} from "react";
import {ContextDispatchData} from "../App.jsx";

const Editor = () => {

    const {onCreate} = useContext(ContextDispatchData)

    const [content, setContent] = useState("");
    const contentRef = useRef(null);


    const onChange = (e) => {
        setContent(e.target.value);
    }


    const onSubmit = () => {
        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    }

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            onSubmit();
        }
    }

    return (<div className="editor">
        <input placeholder="새로운 할일을 입력" ref={contentRef} value={content} onChange={onChange} onKeyDown={onKeyDown}/>
        <button onClick={onSubmit}>추가</button>
    </div>);
}

export default Editor;