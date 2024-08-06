import "./Editor.css";
import Button from "./Button.jsx";
import EmotionItem from "./EmotionItem.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const emotionData = [
    {
        emotionId: 1,
        emotionName: "완전 좋음"
    },
    {
        emotionId: 2,
        emotionName: "좋음"
    },
    {
        emotionId: 3,
        emotionName: "보통"
    },
    {
        emotionId: 4,
        emotionName: "나쁨"
    },
    {
        emotionId: 5,
        emotionName: "끔찍함"
    },
]

const Editor = ({onSumbit}) => {


    const dateToString = (date) => {
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }

        return `${year}-${month}-${day}`;
    }

    const onChangeInput = (e) => {

        let name = e.target.name;
        let value = e.target.value;
        console.log(name, value);
        if (name === "createDate") {
            value = new Date(value);
        }
        setInput({
            ...input,
            [name]: value
        })
    }

    const [input, setInput] = useState({
        createDate: new Date(),
        emotionId: 3,
        content: ""
    });


    const nav = useNavigate();
    const onSubmitButtonClick = () => {
        onSumbit(input);
    }
    return (
        <div className="editor">
            <section className="date_section">
                <h4>오늘의 날짜</h4>
                <input name="createDate" type={"date"} value={dateToString(input.createDate)} onChange={onChangeInput}/>
            </section>
            <section className="emotion_section">
                <h4>오늘의 감정</h4>
                <div className="emotion_list_wrapper">
                    {emotionData.map((item) =>
                        <EmotionItem
                            onClick={() => onChangeInput({target: {name: "emotionId", value: item.emotionId}})}
                            key={item.id} {...item} isSelected={item.emotionId === input.emotionId}/>)}
                </div>
            </section>
            <section className="content_section">
                <h4>오늘의 일기</h4>
                <textarea
                    name="content"
                    value={input.content}
                    onChange={onChangeInput}
                    type={"text"} placeholder="오늘은 어땠나요?"/>
            </section>
            <section className="button_section">
                <Button onClick={()=>nav(-1)} text={"취소 하기"}/>
                <Button onClick={onSubmitButtonClick} text={"작성 완료"} type={"POSITIVE"}/>
            </section>


        </div>
    );

}

export default Editor;