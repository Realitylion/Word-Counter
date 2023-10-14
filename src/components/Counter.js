import { useState } from "react";

export function Counter() {
    const [text, setText] = useState("");
    return (
        <>
            <textarea 
                id="text" 
                value={text} 
                onChange={(e) => {setText(e.target.value)}}
            ></textarea>
            <div className="wordcount">
                Word count: {text.split(" ").filter((word) => word !== "").length}
            </div>
        </>
    );
}