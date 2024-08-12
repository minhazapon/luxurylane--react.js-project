import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import About from './about file/About';
import Carinfo from './Carinfo';
import Login from './firebaseWork/Login';
import SignUp from './firebaseWork/SignUp';
import AuthContext from './firebaseWork/AuthContext';
import PrivateRoute from './firebaseWork/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path: "/",
        element:  <Home></Home> ,
      },
      {
        path: "/about",
        element:  <PrivateRoute><About></About></PrivateRoute> ,
      },
      {
        path: "/cars",
        element:  <PrivateRoute><Carinfo></Carinfo></PrivateRoute> ,
      },
      {
        path: "/login",
        element:  <Login></Login> ,
      },
      {
        path: "/up",
        element:  <SignUp></SignUp> ,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
       
    <RouterProvider router={router} />

    </AuthContext>
    
  </StrictMode>,
)
