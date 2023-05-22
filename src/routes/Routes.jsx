
import App from './../App';
import { createBrowserRouter } from 'react-router-dom';

import Home from '../Pages/Home/Home';

import Main from '../Layout/Main';

import LoginLayout from '../Layout/LoginLayout';
import Login from '../Login/Login';
import Register from '../Login/Register';
import AllToy from './../Pages/AllToy/AllToy';
import BookMark from '../Pages/Bookmark/BookMark';
import PrivateRoutes from './PrivateRoutes';
import AddAToy from './../Pages/AddToy/AddAToy';
import MyToy from '../Pages/AddToy/MyToy';
import Update from '../Pages/AddToy/Update';
import ErrorPage from '../errorPage/ErrorPage';

const router = createBrowserRouter([

  

  {
    path:'/',
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/allToy',
        element:<AllToy></AllToy>
      },
      // {
      //   path:'/addAToy/:id',
      //   element:<AddAToy></AddAToy>,
      //   loader:({params})=>fetch(`http://localhost:5000/AllToyShow/${params.id}`)
      // },
      {
        path:'/addAToy',
        element:<PrivateRoutes><AddAToy></AddAToy></PrivateRoutes>,
        loader:()=>fetch(`https://toy-web-server-side.vercel.app/AllToyShow`)
      },
      {
        path:'/book/:id',
        element:<PrivateRoutes><BookMark></BookMark></PrivateRoutes>,
        loader:({params})=>fetch(`https://toy-web-server-side.vercel.app/AllToyShow/${params.id}`)
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`https://toy-web-server-side.vercel.app/addBook/${params.id}`)
      },
      {
        path:'/myToy',
        element:<MyToy></MyToy>
      },
      
      
    
    
     
    ]
  },
  {
    path:'*',
    element:<ErrorPage/>
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
