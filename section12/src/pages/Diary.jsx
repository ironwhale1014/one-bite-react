import {useParams} from "react-router-dom";

const Diary = () => {

    const params = useParams();
    return (
        <div>
            <h1>{params.id}번 일기 입니다.</h1>
        </div>
    );
}

export default Diary;