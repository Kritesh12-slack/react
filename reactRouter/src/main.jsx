import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider , createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact Us/Contact.jsx'
import User from './components/User/User.jsx'
import GitHub ,{GitHubLoaderData}from './components/Github/Github.jsx'

// const router = createBrowserRouter([{
//   path:"/",
//   element:<App/>,
//   children:[
//     {
//       path:"",
//       element:<Home/>
//     },
//     {
//       path:"/about",
//       element:<About/>
//     },
//     {
//       path:"/contact",
//       element:<About/>
//     },
//   ]
// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:id' element={<User/>}/>
      <Route 
      loader={GitHubLoaderData}
      path='github'
      element={<GitHub/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
