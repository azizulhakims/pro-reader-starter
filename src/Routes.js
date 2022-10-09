import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Books from './components/Books';
import Home from "./components/Home";
import Root from "./components/Root";



const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
  
        {
          path: 'home',
          element: <Home></Home>,
        },
  
        {
          path: 'about',
          element: <About></About>
        },

        {
          path: 'books',
          element: <Books></Books>,
          loader: () => fetch('https://api.itbook.store/1.0/new'),
        }
      ]
      
    },
     
  
     
    
  ])

  export default router