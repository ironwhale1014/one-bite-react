import "./MemoCard.css"

const MemoCard = ({id, memo, name, updateAt, active}) => {

    return (
        <div className="MemoCard">
            <div className="memo">{memo}</div>
            <div>{name}</div>
            <div>{new Date(updateAt).toLocaleDateString()}</div>
            <div>{active ? "완료" : "미완료"}</div>
        </div>
    );

}

export default MemoCard;