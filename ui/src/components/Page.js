import { useState } from "react";
import Inputbox from "./Inputbox";

const Page = () => {
    return (
        <div> 
            <Inputbox/> 

        </div>
            )
            }

function ChatPage({children}){
    return (
        <div> { children} </div>
    )

}

function VerticalLayout({ children}){
    return (
        <div> { children} </div>
    )

}

function ScrollableLayout({ children}){
    const [itemstate,setItemstate] = useState([]);
    return (
        <div> { children} </div>
    )
}

function SentMessage({text}){
    return (
        <div> {text} </div>
    )

}

function ReceivedMessage({text}){
    return (
        <div> {text} </div>
    )

}

function HorizontalLayout({children}){
    return (
        <div> {children}
        </div>
    )
}





export default Page;
