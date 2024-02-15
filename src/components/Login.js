import { useNavigate } from "react-router-dom";

const Login = () =>{
    const navigate = useNavigate();
    return (
        <div className="startchat">
            <button onClick= { () => navigate('/chat') }> Start Chatting </button>
        </div>
    )
    
}

export default Login;

