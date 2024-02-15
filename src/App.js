import React from 'react';
import ReactDOM from "react-dom/client";
import Login from './components/Login';
import Joinchat from './components/Joinchat';
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
              path: '/',
              element : <Joinchat/>,
      },
      {
              path :'/login',
              element: <Login/>,
      },
    ],
    //errorElement: <Error/>,

  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router = {App}/>)
