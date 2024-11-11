import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Component/Home/Home';
import About from './Component/page/about';
import Product from './Component/page/Product';
import Wishlist from './Component/page/Wishlist';
import Login from './Component/page/Login/Login';
import SignUp from './Component/page/Login/Singup';
import AuthProvider from './Provider/AuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/product',
        element:<Product></Product>
      },
      {
        path:'/love',
        element:<Wishlist></Wishlist>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider> 
   <RouterProvider router={router} />
   <Toaster/>
   </AuthProvider>
  </StrictMode>,
)
