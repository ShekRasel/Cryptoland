import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import './index.css'
import Home from './pages/Home'
import Layout from './Layout';
import About from './pages/About';
import Pages from './pages/Pages';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

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
          path:'pages',
          element:<Pages/>
        },{
          path:'blog',
          element:<Blog/>
        },{
          path:'contact',
          element:<Contact/>
        },
      ]
    }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
