import { useNavigate } from "react-router-dom";
import Inputbox from "./Inputbox";
import { useState } from "react";


const Login = () =>{
    const [userName, setUserName] = useState(localStorage.getItem('username'));
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const navigate = useNavigate();

    function onStartChat(){
        localStorage.setItem('username', userName);
         navigate('/chat')
    }
    function onInputChange(e){
        let value = e.target.value;
        if (value.length >= 1) 
        {
            setIsButtonEnabled(true);
        }
        else {
            setIsButtonEnabled(false);
        }
        setUserName(value);

    }


    return (
        <div className="container">
        <div className="startchat" >
              <input type="text" placeholder="Please enter your name" value={userName} onChange={onInputChange} />  
            <div className="joinbutton">
            <button  disabled={!isButtonEnabled} onClick= { onStartChat }> Start Chatting </button>
            </div>
        </div>
        </div>
        
    )
    
}

export default Login;

