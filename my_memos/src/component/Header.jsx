import "./Header.css"

const Header = ({title})=>{
    return(
        <div className="Header">
            <div className="title">{title}</div>
        </div>
    );
}

export default Header;