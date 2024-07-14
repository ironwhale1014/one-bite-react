import "./Header.css"

const Header = () => {
    return <header className="header">
        <h3 className="header__title">
            오늘의 할일 😁
        </h3>
        <h1>{new Date().toDateString()}</h1>

    </header>
}

export default Header;