import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'

 


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>
  },
    {
      path: '/home',
      element: <Home></Home>,
    },
  
])

function App() {

  return <div>

<Header></Header>
<RouterProvider 
  router={router}
></RouterProvider>


  </div>
}

export default App
