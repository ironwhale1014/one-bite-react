import "./DiaryList.css"
import Button from "./Button.jsx";
import DiaryItem from "./DiaryItem.jsx";
import {useNavigate, useNavigation} from "react-router-dom";
import {useState} from "react";

const DiaryList = ({data}) => {

    const nav = useNavigate();
    const [sortType, setSortType] = useState("latest");
    const changeSortType = (e) => {
        setSortType(e.target.value);
    }

    const getSortedData = () => {

        return data.toSorted((a, b) => {
            if (sortType === "latest") {
                return b.createDate - a.createDate;
            } else return a.createDate - b.createDate;
        })


        //
        // if (sortType === "latest") {
        //     return data.toSorted((a, b) => b.createDate - a.createDate);
        // } else {
        //     return data.toSorted((a, b) => b.createDate - a.createDate);
        // }

    }

    const sortedData = getSortedData();

    return (<div className="DiaryList">
        <div className="menu_bar">
            <select onChange={changeSortType}>
                <option value={"latest"}>최신순</option>
                <option value={"oldest"}>오래된 순</option>
            </select>
            <Button text={"새로운 일기쓰기"} type={"POSITIVE"} onClick={() => nav(`/new`)}/>
        </div>
        <div className="list_wrapper">
            {sortedData.map((item) => (<DiaryItem key={item.id} {...item}/>))}
        </div>
    </div>);
}

export default DiaryList;