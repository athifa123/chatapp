import { useNavigate } from "react-router-dom";
import Inputbox from "./Inputbox";
import { useState } from "react";


const Login = () =>{
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    function onStartChat(){
        localStorage.setItem('userName', userName);
         navigate('/chat')
    }


    return (
        <div className="container">
        <div className="startchat" >
              <input type="text" placeholder="Please enter your name" value={userName} onChange={(e) => {
                setUserName(e.target.value)
              }} />  
            <div className="joinbutton">
            <button  enable={useState.length>=4} onClick= { onStartChat }> Start Chatting </button>
            </div>
        </div>
        </div>
        
    )
    
}

export default Login;

