import './App.css'
import {Link, Route, Routes, useNavigate, } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Diary from "./pages/Diary.jsx";
import New from "./pages/New.jsx";
import Notfound from "./pages/Notfound.jsx";

function App() {

    const nav = useNavigate();
    const onClick = ()=>{
        nav("/new");
    }

    return (<>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/New'>New</Link>
            <Link to='/Diary'>Diary</Link>
        </div>
        <button onClick={onClick}>go to new page</button>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/new" element={<New/>}/>
            <Route path="/diary/:id" element={<Diary/>}/>
            <Route path="*" element={<Notfound/>}/>
        </Routes>

        </>);
}

export default App
