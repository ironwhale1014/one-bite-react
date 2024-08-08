import Header from "../component/Header.jsx";
import MemoInput from "../component/MemoInput.jsx";
import List from "../component/List.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

const MemoPage = () => {

    const [memos, setMemos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {


        const {data} = await axios.get("http://192.168.200.45:47511/api/memos");

        setMemos(data);
        setIsLoading(false);
    }


    useEffect(() => {
        getData();
    }, []);


    return (<div>
        <Header title={"메모장"}/>
        <MemoInput/>
        <List values={memos} isLoading={isLoading}/>
    </div>);
}

export default MemoPage;