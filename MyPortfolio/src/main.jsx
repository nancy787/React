import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Home, Contact, About, Nav, Work}  from './pages/index'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path='/' element={ <Nav/>}>
      <Route path='' element={ <Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/work' element={<Work/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
