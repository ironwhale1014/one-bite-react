const Button = ({text, color = "black", children}) => {

    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    }


    return (<button style={{color: color}} onClick={onClickButton}>
        {text} - {color}
    </button>);
}

export default Button;