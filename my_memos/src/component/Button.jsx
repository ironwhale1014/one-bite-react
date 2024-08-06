import "./Button.css"

const Button = ({text, type}) => {
    return <button className={`button button_${type}`}>{text}</button>


}

export default Button;