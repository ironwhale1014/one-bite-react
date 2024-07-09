import "./Main.css"


const Main = () => {
    const user = {
        name: 'John',
        isLogin: true
    }
    if (user.isLogin) {
        return (
            <main className="logout">
                로그아웃
            </main>
        );
    } else {

        return (
            <main>
                로그인
            </main>);

    }
}

export default Main;