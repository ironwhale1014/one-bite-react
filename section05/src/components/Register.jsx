import {useRef, useState} from "react";

// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    const inputRef = useRef(null);

    const onSubmit = () => {
        if (input.name === "") {
            console.log(inputRef.current);
            inputRef.current.focus();

        }
    }

    console.log("Register", input);
    const onChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value});
    }


    return (
        <div>
            <div>
                <h1>Register</h1>
                <input ref={inputRef} placeholder="Name" onChange={onChange} value={input.name} name="name"/>
            </div>
            <div>
                <input value={input.birth} type="date" placeholder="Birth" onChange={onChange} name="birth"/>
            </div>
            <div>
                <select value={input.country} onChange={onChange} name="country">
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>
            <div>
                <textarea onChange={onChange} value={input.bio} name="bio"/>
            </div>
            <div>
                <button onClick={onSubmit}>Submit</button>
            </div>
        </div>

    );
}

export default Register;