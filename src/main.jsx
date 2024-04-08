import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import AuthProvider, { AuthContext } from './AuthProvider';
import PrivateRoute from './PrivateRoute';
import Orders from './Orders';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/orders',
        element: <PrivateRoute>
          <Orders></Orders>
        </PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  
   
   
  </React.StrictMode>,
)
