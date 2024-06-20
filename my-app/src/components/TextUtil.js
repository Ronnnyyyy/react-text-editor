import React,{useState} from 'react'

export default function TextUtil() {

    const [text, setText] = useState("");


    let handleClear = () => {
        setText("");
    };

    let handleChange = (event) => {
        setText(event.target.value);
    };

    let handleUpper = () => {
        setText(text.toUpperCase());
    };

    let handleFontm = () => {
        let text = document.getElementById("text");
        text.style.fontFamily = "Maven Pro";

    };

    let handleFontp = () => {
        let text = document.getElementById("text");
        text.style.fontFamily = "Protest Revolution";

    };

    let handleFonta = () => {
        let text = document.getElementById("text");
        text.style.fontFamily = "Acme";

    };



    return (
        <div>
            <div className="container mt-5" >
                <h1>Welcome to our website!</h1>
                <textarea name="textArea" id="text" cols="80" rows="10" placeholder="Type something..." value={text} onChange={handleChange} ></textarea>
            </div>
            <div className="container" >
                <button onClick={handleClear} className="btn btn-primary mx-5">Clear Text</button>

                <button onClick={handleUpper} className="btn btn-primary mx-5">Uppercase Text</button>


                <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" onClick={handleFontm}>Maven Pro</a></li>
                    <li><a className="dropdown-item" onClick={handleFontp}>Protest Revolution</a></li>
                    <li><a className="dropdown-item" onClick={handleFonta}>Acme</a></li>
                </ul>

            </div>
        </div>
    )
}
