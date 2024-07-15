import "./Editor.css"
import {useContext, useRef, useState} from "react";
import {DispatchContext} from "../App.jsx";

const Editor = () => {

    const {onCreate} = useContext(DispatchContext)
    const [content, setContent] = useState("");
    const focusRef = useRef(null);


    const getContent = (e) => {
        setContent(e.target.value);
    }


    const onSubmit = () => {

        if (content === "") {
            focusRef.current.focus();
            return;
        }
        onCreate(content)
        setContent("");
    }

    return (
        <div className="editor">
            <input placeholder="새로운 Todo..." value={content} ref={focusRef} onChange={getContent}/>
            <button onClick={onSubmit}>추가</button>
        </div>
    );
}

export default Editor;