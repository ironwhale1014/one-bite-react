import "./Header.css"
import {memo} from "react";

const Header = () => {
    console.log("Header");
    return (<div className="Header">
        <h3>오늘은 📅</h3>
        <h1>{new Date().toDateString()}</h1>
    </div>);
}

// export default memo(Header);
export default Header;