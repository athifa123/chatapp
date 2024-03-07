import React from 'react';
import Login from './components/Login';
import Page from './components/Page';
import { useEffect, useState } from "react";
import { Outlet, RouterProvider , createBrowserRouter} from "react-router-dom";
import socket from './socket';
import backgroundImage from './chatappbackgroudimage.jpeg';
//import  socketobj   from './socket';

function App({socket}) {
  const [isConnected, setIsConnected] = useState(socket.connected)
  useEffect(() => {
    function onConnect() {
        setIsConnected(true)
    }
    function onDisconnect() {
        setIsConnected(false)
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
   
    return ()=>{
        socket.off('connect', onConnect);
        socket.off('disconnect', onDisconnect);
       
    }
}, []);
  return (
    
    <div className="App" style={{ 'background': "teal" }} >
      <Outlet />
    
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path : '/',
    Element : <App socket={socket}/>, 
    children : [
      {
              path :'/',
              element: <Login/>,
      },
      {
        path :'/chat',
        element: <Page socket={socket}/>,
      },

    ],
    //errorElement: <Error/>,

  }
])

export default appRouter;
