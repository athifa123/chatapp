import { useState } from "react";

const Inputbox = ({onSend}) => {
    const [message, setMessage] = useState("");
    return (
        <div className="initiatechat" style={{
            "display": "flex",
            "flex-direction": "row",
            "width": "100%",
            "flex-wrap": "nowrap",
            "align-content": "center",
            "align-items": "stretch",
            "justify-content": " center",
            "position": "fixed", "bottom": "0"
        }}> 
            <input value ={message} onChange={(e)=>{
                setMessage(e.target.value)
            }} style={{
                'width': '100%', "height"
                    : "20%",
                'padding': '10px',
                'border': '1px solid purple',
                'border-radius': '10px',
                'background': "pink"
            }} />
            <button  onClick = {()=>{
                onSend(message);
                setMessage("");
            }} style={{
                "background ": "green", 'padding': '10px',
                'border': '1px solid red',
                'border-radius': '10px',
            }}> Send </button>

        </div>


    )
}

export default Inputbox;