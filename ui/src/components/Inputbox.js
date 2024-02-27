import { useState } from "react";

const Inputbox = ({onSend}) => {
    const [message, setMessage] = useState("");
    return (
        <div className="initiatechat" style={{
            "display": "flex",
            "flex-direction": "row",
            "flex-wrap": "nowrap",
            "align-content": "center",
            "align-items": "stretch",
            "justify-content": " center",
            "position": "fixed", "bottom": "0", "margin":"9px",
            "width": "-webkit-fill-available", "gap":"5px"
        }}> 
            <input value ={message} onChange={(e)=>{
                setMessage(e.target.value)
            }} />
            <button style={{ "height": "55px", "padding": "10px 10px"}} onClick = {()=>{
                onSend(message);
                setMessage("");
            }}> Send </button>

        </div>


    )
}

export default Inputbox;