import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import {Home} from './Components'
import {About} from './Components'
import {Contact} from './Components'
import {User} from './Components'
import { Github, gitInfoLoader } from './Components';

// method 1
// const router = createBrowserRouter( [
//   {
//     path : '/',
//     element : <Layout/>,
//     children : [
//       {
//         path : '',
//         element : <Home/>
//       },{
//         path : 'about',
//         element: <About/>
//       }, {
//         path : 'contact',
//         element : <Contact/>
//       }
//     ]
//   }
// ]);

//method 2
const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path="contact" element={ <Contact/>}></Route>
          <Route path="user/:userid" element={ <User/>}></Route>  
          {/* to pass user id */}
          <Route 
          path="github"
          element={ <Github/>}
          loader={gitInfoLoader}
           >
          </Route>  
    </Route>  
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
