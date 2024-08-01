import "./Editor.css";
import Button from "./Button.jsx";
import EmotionItem from "./EmotionItem.jsx";

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

const Editor = () => {

    const emotionId = 2 ;

    return (
        <div className="editor">
            <section className="date_section">
                <h4>오늘의 날짜</h4>
                <input type={"date"}/>
            </section>
            <section className="emotion_section">
                <h4>오늘의 감정</h4>
                <div className="emotion_list_wrapper">
                    {emotionData.map((item) =>
                        <EmotionItem key={item.id} {...item} isSelected={emotionId === item.emotionId}/>)}
                </div>
            </section>
            <section className="content_section">
                <h4>오늘의 일기</h4>
                <textarea type={"text"} placeholder="오늘은 어땠나요?"/>
            </section>
            <section className="button_section">
                <Button text={"취소 하기"}/>
                <Button text={"작성 완료"} type={"POSITIVE"}/>
            </section>


        </div>
    );

}

export default Editor;