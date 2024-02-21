import { useEffect, useState } from "react";
import Inputbox from "./Inputbox";

var id = crypto.randomUUID();
var mock_data = [
    {
        "by": "me",
        "message": "hello",
    },
    {
        "by": "you",
        "message": "hello",
    },
    {
        "by": "me",
        "message": "hey",
    },
    {
        "by": "you",
        "message": "bye",
    },
    {
        "by": "me",
        "message": "hello",
    },
    {
        "by": "you",
        "message": "hello",
    },
    {
        "by": "me",
        "message": "hey",
    },
    {
        "by": "you",
        "message": "bye",
    },
    {
        "by": "me",
        "message": "hello",
    },
    {
        "by": "you",
        "message": "hello",
    },
    {
        "by": "me",
        "message": "hey",
    },
    {
        "by": "you",
        "message": "bye",
    },
    {
        "by": "me",
        "message": "hello",
    },
    {
        "by": "you",
        "message": "hello",
    },
    {
        "by": "me",
        "message": "hey",
    },
    {
        "by": "you",
        "message": "bye",
    },
    {
        "by": "me",
        "message": "hello",
    },
    {
        "by": "you",
        "message": "hello",
    },
    {
        "by": "me",
        "message": "hey",
    },
    {
        "by": "you",
        "message": "bye",
    },


]



const Page = ({ socket }) => {
    const [listOfMessage, setListOfMessage] = useState([]);

    function onSend(msg) {
        var payload = {
            message: msg,
            by: id,
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
            return (data.by === id ? < SentMessage text={data.message} > </SentMessage> : <ReceivedMessage text={data.message} />)
        })}</div>
    )
}

function SentMessage({ text }) {
    return (
        <div style={{ "padding": "10px", "border-radius": "5px", "display": "flex", "flexDirection": "row-reverse" }}>  <div style={{
            "background": "aquamarine",
            "padding": "7px",
            "border-radius": "5px",
            "font-size": "xx-small"
        }}> {text}  </div> </div>
    )

}

function ReceivedMessage({ text }) {
    return (
        <div style={{ "padding": "10px", "border-radius": "5px", "display": "flex" }}>  <div style={{
            "background": "azure",
            "padding": "7px",
            "border-radius": "5px",
            "font-size": "xx-small"
        }}> {text}  </div> </div>
    )

}


export default Page;
