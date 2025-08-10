import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthLayout, Login}  from './components/index.js'
import Home from "./components/pages/Home.jsx";
import AllPosts from "./components/pages/AllPosts"
import EditPost from "./components/pages/EditPost"
import Post from "./components/pages/Post";
import Signup from "./components/pages/Signup";
import AddPost from "./components/pages/AddPost";

const router = createBrowserRouter([
    {
      path:"/",
      element : <App/>,
      children : [
        {
          path: "/",
          element: <Home/>
        },
        {
          path:"/login",
          element : (
            <AuthLayout authentication={false}>
              <Login/>
            </AuthLayout>
          )
        },{
          path : '/signup',
          element : (
            <AuthLayout authentication={false}>
              <Signup/>
            </AuthLayout>
          )
        },{
          path : '/all-posts',
          element : (
            <AuthLayout authentication={true}>
              <AllPosts/>
            </AuthLayout>
          )
        },
        {
          path : '/add-posts',
          element : (
            <AuthLayout authentication={true}>
              <AddPost/>
            </AuthLayout>
          )
        },{
          path : 'edit-post/:slug',
          element: (
            <AuthLayout authentication={true}>
              <EditPost/>
            </AuthLayout>
          )
        },{
          path : 'post/:slug',
          element: (
              <Post/>
          )
        }
      ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
