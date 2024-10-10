import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css'
import Home from './pages/Home'
import Layout from './Layout';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import PasswordReset from './pages/PasswordReset';

let routes = createBrowserRouter([
    {
      path: '/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },{
          path:'about',
          element:<About/>
        },{
          path:'blog',
          element:<Blog/>
        },{
          path:'contact',
          element:<Contact/>
        },
        {
          path:'signup',
          element:<SignUp/>
        },
        {
          path:'signin',
          element:<SignIn/>
        },
        {
          path:'passwordReset',
          element:<PasswordReset/>
        },
      ]
    }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
