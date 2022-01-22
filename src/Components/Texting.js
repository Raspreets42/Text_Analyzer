import { useState } from "react"

const Texting = (props) => {

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
    
    const copyText = () => {
        console.log("Copied !!!");
        var ctext = document.getElementById("textarea");
        ctext.select();
        navigator.clipboard.writeText(ctext.value);
    }

    const removeExtraSpace = () => {
        console.log("Removed Extra Spaces");
        let newText = text.split(/[  ]+/);
        setTest(newText.join(" "));
    }
    
    return (
        <>
            <div className="container-fluid py-2"  >
                <h2 className="text-center my-4">  Text Analyzer  </h2>
                <div className="container my-4">
                    <hr />
                    <h4 className="my-3">Free software utility which allows you to find the most frequent phrases and frequencies of words. It also counts number of words, characters, sentences and syllables.</h4>

                    <hr />

                    <h4 className="text-center my-3">Enter Text ( Copy and Paste is Fine ) Here : </h4>

                    <textarea className="form-control" rows={10} id="textarea" value={text} onChange={handleOnChange}></textarea>
                </div>
                <div className="container text-center">
                    <button type="button" className="btn btn-outline-primary mx-3" onClick={UpCase}>Upper Case</button>
                    <button type="button" className="btn btn-outline-primary mx-3" onClick={Clearing} >Clear</button>
                    <button type="button" className="btn btn-outline-primary mx-3" onClick={LowCase} >Lower Case</button>
                    <button type="button" className="btn btn-outline-primary mx-3" onClick={copyText} >Copy Text</button>
                    <button type="button" className="btn btn-outline-primary mx-3" onClick={removeExtraSpace} >Remove Extra Space</button>
                    <hr />
                </div>
                <div className="container my-4">
                    <h4 className="text-center">Text Counter</h4>
                    <h5>Number of Words :  <span style={props.mode==="dark"?blueSpaning:yellowSpaning}> {text.split(" ").length} </span>  </h5>
                    <h5>Nuber of Character : <span style={props.mode==="dark"?blueSpaning:yellowSpaning}> {text.length} </span> </h5>
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
