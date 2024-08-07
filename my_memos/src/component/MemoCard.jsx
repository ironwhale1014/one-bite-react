import "./MemoCard.css"
import Button from "./Button.jsx";
import {utcToKoreanTime} from "../util/utcToKoreanTime.jsx";
import ReactMarkdown from 'react-markdown'

const MemoCard = ({id, memo, name, updateAt, active}) => {


    const {date, time} = utcToKoreanTime({utcTime: updateAt});


    return (
        <div className="MemoCard">
            <section className="memo">
                <ReactMarkdown>
                    {memo}
                </ReactMarkdown>
            </section>
            <section className="user">
                {name !== '' ?
                    <div className="header">작성자</div> : <div></div>}
                <div className="name">{name}</div>

            </section>
            <section className="datetime">
                <div className="date">
                    {date}
                </div>
                <div className="time">
                    {time}
                </div>
            </section>
            <section><Button text={"완료 처리"} type={"POSITIVE"}/></section>
            <section><Button text={"삭제"}/></section>
        </div>
    );

}

export default MemoCard;