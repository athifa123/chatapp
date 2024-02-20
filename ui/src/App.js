import React from 'react';
import Login from './components/Login';
import Page from './components/Page';
import { Outlet, RouterProvider , createBrowserRouter} from "react-router-dom";
import { socket } from './socket';
//import  socketobj  from './socket';

function App() {
  return (
    <div className="App">
      <Outlet/>
    
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path : '/',
    Element : <App/>,
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
