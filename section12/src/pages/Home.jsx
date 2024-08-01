import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import DiaryList from "../components/DiaryList.jsx";
import {useContext, useState} from "react";
import {DiaryStateContext} from "../App.jsx";


const getMonthlyData = (pivotDate, data) => {

    const beginDate = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0);
    const endDate = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59);


    return data.filter((item) => {
        return item.createDate >= beginDate && item.createDate <= endDate;
    });
}

const Home = () => {


    const data = useContext(DiaryStateContext);


    const [pivotDate, setPivotDate] = useState(new Date());

    const filteredData = getMonthlyData(pivotDate, data);

    console.log(filteredData);

    const decreasePivotDate = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    }
    const increasePivotDate = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    }

    return (<div>
        <Header
            title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
            leftChild={<Button onClick={decreasePivotDate} text={"<"}/>}
            rightChild={<Button onClick={increasePivotDate} text={">"}/>}
        />
        <DiaryList data={filteredData}/>
    </div>);
}

export default Home;