import React, { useState, createRef } from 'react';
import { Button } from "react-bootstrap";
import Text from '../Text';
import { useSearchParams } from 'react-router-dom';
import { exportComponentAsJPEG } from "react-component-export-image";

const Edit = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);

    const memeRef = createRef();

    const addText = () => {
        setCount(count + 1);
        console.log("Button clicked to add text.");
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px",marginTop:"-70px" }}>
            {/* Dynamic container */}
            <div 
                style={{
                    width: "670px",
                    margin: "20px 0",
                    background: "linear-gradient(to right, rgb(86, 143, 186), rgb(196, 163, 138))",
                    padding: "20px",
                }} 
                ref={memeRef} 
                className="meme mt-5 mb-5"
            >
                <img src={params.get("url")} width={"250px"} alt="Dynamic" />
                {
                    Array(count).fill(0).map((_, index) => (
                        <Text key={index} />
                    ))
                }
            </div>

            {/* Buttons */}
            <div style={{ marginTop: "-10px", display: "flex", gap: "10px" }}>
                <Button onClick={addText} style={{ margin: "0" }}>
                    Add Text
                </Button>
                <Button variant="success" onClick={() => exportComponentAsJPEG(memeRef)}>
                    Save
                </Button>
            </div>
        </div>
    );
};

export default Edit;
