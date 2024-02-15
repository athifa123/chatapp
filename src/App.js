import React from 'react';
import ReactDOM from "react-dom/client";
import Login from './components/Login';
import Joinchat from './components/Joinchat';
import Page from './components/Page';
import { Outlet, RouterProvider , createBrowserRouter} from "react-router-dom";

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
        element: <Page/>,
      },

    ],
    //errorElement: <Error/>,

  }
])

export default appRouter;
