
import App from './../App';
import { createBrowserRouter } from 'react-router-dom';

import Home from '../Pages/Home/Home';

import Main from '../Layout/Main';

import LoginLayout from '../Layout/LoginLayout';
import Login from '../Login/Login';
import Register from '../Login/Register';
import AllToy from './../Pages/AllToy/AllToy';

const router = createBrowserRouter([


  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/allToy',
        element:<AllToy></AllToy>
      },
    
    
     
    ]
  },
  {
    path:'/',
    element:<LoginLayout></LoginLayout>,
    children:[
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  }
 
  
]);

export default router;
