import { useState } from "react"

const Texting = () => {

    const [text, setTest] = useState("");
    function UpCase() {
        let inputText = text.toUpperCase();
        setTest(inputText);
    }
    function LowCase() {
        let inputText = text.toLowerCase();
        setTest(inputText);
    }
    function Clearing() {
        setTest("");
    }

    function handleOnChange(event) {
        setTest(event.target.value);
    }

    let lightstyle = {
        color: "black",
        backgroundColor: "white"
    }
    let darkstyle = {
        color: "white",
        backgroundColor: "black"
    }
    const [myStyle, setMyStyle] = useState(lightstyle);
    
    let yellowSpaning = {
        color: "yellow",
        fontWeight: "bold",
        fontStyle: "italic"
    }
    let blueSpaning = {
        color: "blue",
        fontWeight: "bold",
        fontStyle: "italic"
    }
    const [mySpan, setMySpan] = useState(blueSpaning);

    const [myContent , setMyContent] = useState("Enable Dark Theme");

    function darkTheme() {
        if (myStyle.backgroundColor == "white") {
            setMyStyle(darkstyle);
            setMySpan(yellowSpaning);
            setMyContent("Enable Light Theme");
        } else {
            setMyStyle(lightstyle);
            setMySpan(blueSpaning);
            setMyContent("Enable Dark Theme");
        }
    }
    
    
    return (
        <>
            <div className="container-fluid py-2" style={myStyle} >
                <h2 className="text-center my-4">  Text Analyzer  </h2>
                <button type="button" className="btn btn-outline-primary mx-3" onClick={darkTheme} >{myContent}</button>
                <div className="container my-4">
                    <hr />
                    <h4 className="my-3">Free software utility which allows you to find the most frequent phrases and frequencies of words. It also counts number of words, characters, sentences and syllables.</h4>

                    <hr />

                    <h4 className="text-center my-3">Enter Text ( Copy and Paste is Fine ) Here : </h4>

                    <textarea className="form-control" rows={10} id="floatingTextarea" value={text} onChange={handleOnChange}></textarea>
                </div>
                <div className="container text-center">
                    <button type="button" className="btn btn-outline-primary mx-3" onClick={UpCase}>Upper Case</button>
                    <button type="button" className="btn btn-outline-primary mx-3" onClick={Clearing} >Clear</button>
                    <button type="button" className="btn btn-outline-primary mx-3" onClick={LowCase} >Lower Case</button>
                    <hr />
                </div>
                <div className="container my-4">
                    <h4 className="text-center">Text Counter</h4>
                    <h5>Number of Words :  <span style={mySpan}> {text.split(" ").length} </span>  </h5>
                    <h5>Nuber of Character : <span style={mySpan}> {text.length} </span> </h5>
                </div>

                <div className="container my-4">
                    <hr />
                    <h3 className="text-center my-3"> Preview </h3>
                    <h5>{text}</h5>
                    <hr />
                </div>
            </div>
        </>
    )
}

export default Texting
