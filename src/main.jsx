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

import Product from './Component/page/Product';
import Login from './Component/page/Login/Login';
import SignUp from './Component/page/Login/Singup';
import AuthProvider from './Provider/AuthProvider';
import Contact from './Component/page/contact';
import CartDetails from './Cart/CartDetails';
import Checkout from './Cart/Checkout';
import MyOder from './Component/page/Mybooking';



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
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/product',
        element:<Product></Product>
      },
      {
        path: '/checkout/:id',
        element:<Checkout></Checkout>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/details/:id',
        element:<CartDetails></CartDetails>
      },
      {
         path:'/mybooking',
         element:<MyOder></MyOder>
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
