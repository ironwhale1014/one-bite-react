import "./Main.css"

const Main = () => {

    const user = {
        name: "Kim",
        isLogin: false
    }

    if (user.isLogin) {
        return (
            <main>
                <h1>Main</h1>
                <h2>로그아웃</h2>
            </main>
        );
    } else {
        return (<main>
            <h1>Main</h1>
            <h2 className="login">로그인</h2>
        </main>);

    }


}

export default Main;