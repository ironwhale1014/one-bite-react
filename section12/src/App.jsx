import './App.css'
import {Route, Routes,} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Diary from "./pages/Diary.jsx";
import New from "./pages/New.jsx";
import Notfound from "./pages/Notfound.jsx";
import Edit from "./pages/Edit.jsx";
import {createContext, useContext, useReducer, useRef} from "react";

const mockData = [{
    id: 1, createDate: new Date().getTime(), content: "1번 일기입니다.", emotionId: 1
}, {
    id: 2, createDate: new Date().getTime(), content: "2번 일기입니다.", emotionId: 2
},]

const reducer = (state, action) => {
    switch (action.type) {
        case "CREATE" :
            return [action.data, ...state];
        case "UPDATE" :
            return state.map((item) => String(item.id) === String(action.data.id) ? action.data : item);
        case "DELETE" :
            return state.filter((item) => String(item.id) !== String(action.data.id));
        default :
            return state;
    }
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();


function App() {

    const [data, dispatch] = useReducer(reducer, mockData);

    const idRef = useRef(3);

    const onCreate = (createDate, emotionId, content) => {
        dispatch({
            type: "CREATE", data: {
                id: idRef.current++, createDate: createDate, content: content, emotionId: emotionId,
            }
        })
    };

    const onUpdate = (id, createDate, emotionId, content) => {
        dispatch({
            type: "UPDATE", data: {
                id: id, createDate: createDate, content: content, emotionId: emotionId,
            }
        });
    }

    const onDelete = (id) => {
        dispatch({
            type: "DELETE", data: {
                id: id
            }
        });
    }


    return (<>
        <DiaryStateContext.Provider value={data}>
            <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/new" element={<New/>}/>
                    <Route path="/diary/:id" element={<Diary/>}/>
                    <Route path="/Edit/:id" element={<Edit/>}/>
                    <Route path="*" element={<Notfound/>}/>
                </Routes>
            </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
    </>);
}

export default App
