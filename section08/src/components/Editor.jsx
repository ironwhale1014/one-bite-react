import "./Editor.css"
import {useRef, useState} from "react";

const Editor = ({onCreate}) => {

    const [content, setContent] = useState('');
    const contentRef = useRef(null);

    const onChangeValue = (e) => {
        setContent(e.target.value);
    }

    const onKeyDown = (e) => {
        if(e.key === "Enter") {
            onSubmit();
        }
    }


    const onSubmit = () => {
        if (content === "") {
            contentRef.current.focus();
            return;
        }

        onCreate(content);
        setContent("");
    }


    return (<div className="Editor">
        <input onKeyDown={onKeyDown} ref={contentRef} value={content} onChange={onChangeValue} placeholder="오늘 할일은"/>
        <button onClick={onSubmit}>추가</button>
    </div>);
}

export default Editor;