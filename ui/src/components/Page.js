import { useEffect, useState } from "react";
import Inputbox from "./Inputbox";

//var id = crypto.randomUUID();

const Page = ({ socket }) => {
    const [listOfMessage, setListOfMessage] = useState([]);

    function onSend(msg) {
        var payload = {
            message: msg,
            by: localStorage.getItem('username'),
            date: new Date().toGMTString(),

        }
        socket.emit('message', payload);
        let messages = Array.from(listOfMessage)
        messages.push(payload);
        setListOfMessage(messages);

    }

    function onResponse(data) {
        let messages = Array.from(listOfMessage)
        messages.push(data);
        setListOfMessage(messages);
    }
    socket.on('response', onResponse);


    return (
        <div style={{}}>

            <VerticalLayout>
                <Inputbox onSend={onSend} />
                <MessageContainer items={listOfMessage}>

                </MessageContainer >
            </VerticalLayout>

        </div>
    )
}


function VerticalLayout({ children }) {
    return (
        <div style={{

        }}> {children} </div>
    )

}

function MessageContainer({ items }) {
    const [itemstate, setItemstate] = useState([]);
    return (
        <div style={{ "height": "100%" }}> {items.map((data) => {
            return (data.by === localStorage.getItem('username') ? < SentMessage text={data.message} by={data.by} date={data.date}> </SentMessage>
                : <ReceivedMessage text={data.message} by={data.by} date={data.date} />)
        })}</div>
    )
}

function SentMessage({ by, date, text }) {
    return (
        <div style={{ "padding": "10px", "border-radius": "5px", "display": "flex", "flexDirection": "row-reverse" }}>
            <div style={{ "display": "flex", "flexDirection": "column", "background": "#7FC7D9", "border-radius": "5px", "border": "1px solid #8f8282", "padding": "7px" }}>
                
                <div style={{"fontSize":"xx-small", "opacity" :"40%"}}> {by}</div>
                <div style={{
                    "border-radius": "5px",
                    "font-size": "medium", "padding-bottom": "5px"
                }}> {text}
                </div>
                <div style={{"fontSize":"xx-small", "opacity" :"40%" , "text-align": "end"}}> {new Date(date).toLocaleTimeString()} </div>
            </div>
        </div>

    )

}

function ReceivedMessage({ by, date, text }) {
    return (
        <div style={{ "padding": "10px", "border-radius": "5px", "display": "flex", }}> 
         <div style={{ "display": "flex", "flexDirection": "column", "background":"#92C7CF", "border-radius": "5px", "border": "1px solid #8f8282", "padding": "7px" }}>
            <div style={{"fontSize":"xx-small", "opacity" :"40%"}}> {by}</div>
            <div style={{
                "border-radius": "5px",
                "font-size": "medium", "padding-bottom": "5px"
            }}> {text}
            </div>
            <div style={{"fontSize":"xx-small", "opacity" :"40%","text-align": "end" }}> {new Date(date).toLocaleTimeString()} </div>
        </div>
        </div>
    )

}


export default Page;