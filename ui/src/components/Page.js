import { useEffect, useState } from "react";
import Inputbox from "./Inputbox";

//var id = crypto.randomUUID();

const Page = ({ socket }) => {
    const [listOfMessage, setListOfMessage] = useState([]);

    function onSend(msg) {
        var payload = {
            message: msg,
            by: localStorage.getItem('username'),
            date: new Date(),

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
        <div style={{ "background": "#eed3ac" }}>

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
            return (data.by === localStorage.getItem('username') ? < SentMessage text={data.message} by={data.by} date={data.date.toDateString()}> </SentMessage> 
            : <ReceivedMessage text={data.message} by={data.by} date={data.date} />)
        })}</div>
    )
}

function SentMessage({ by, date, text }) {
    return (
        <div style={{ "padding": "10px", "border-radius": "5px", "display": "flex", "flexDirection": "row-reverse" }}>
            <div style={{ "display": "flex", "flexDirection": "column" }}>
                <div> {by}</div>
                <div style={{
                    "background": "aquamarine",
                    "padding": "7px",
                    "border-radius": "5px",
                    "font-size": "xx-small"
                }}> {text}
                </div>
                <div> {date} </div>
            </div>
        </div>

    )

}

function ReceivedMessage({ by,date,text }) {
    return (
        <div style={{ "padding": "10px", "border-radius": "5px", "display": "flex" }}>  <div style={{ "display": "flex", "flexDirection": "column" }}>
            <div> {by}</div>
            <div style={{
                "background": "aquamarine",
                "padding": "7px",
                "border-radius": "5px",
                "font-size": "xx-small"
            }}> {text}
            </div>
            <div> {date} </div>
        </div>
        </div>
    )

}


export default Page;
