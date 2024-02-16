import { useState } from "react";
import Inputbox from "./Inputbox";

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



const Page = () => {
    return (
        <div style={{ "background": "#eed3ac" }}>

            <VerticalLayout>
                <Inputbox />
                <ScrollableLayout>
                    <SentMessage />
                    <ReceivedMessage />
                </ScrollableLayout>
            </VerticalLayout>

        </div>
    )
}

function ChatPage({ children }) {
    return (
        <div> {children} </div>
    )

}

function VerticalLayout({ children }) {
    return (
        <div style={{

        }}> {children} </div>
    )

}

function ScrollableLayout({ children }) {
    const [itemstate, setItemstate] = useState([]);
    return (
        <div style={{ "height": "100%" }}> {mock_data.map((data) => {
            return (data.by === "me" ? < SentMessage text={data.message} > </SentMessage> : <ReceivedMessage text={data.message} />)
        })}</div>
    )
}

function SentMessage({ text }) {
    return (
        <div style={{ "padding": "10px", "border-radius": "5px", "display":"flex", "flexDirection":"row-reverse" }}>  <div style={{ "background": "aquamarine",
            "padding": "7px",
            "border-radius": "5px",
            "font-size": "xx-small"}}> {text}  </div> </div>
    )

}

function ReceivedMessage({ text }) {
    return (
        <div style={{ "padding": "10px", "border-radius": "5px", "display":"flex" }}>  <div style={{ "background": "azure",
        "padding": "7px",
        "border-radius": "5px",
        "font-size": "xx-small"}}> {text}  </div> </div>
    )

}

function HorizontalLayout({ children }) {
    return (
        <div> {children}
        </div>
    )
}





export default Page;
