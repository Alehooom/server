import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PostEdit from './views/PostEdit.jsx'
import Posts from './views/Posts.jsx'
import PostDetail from './views/PostDetail.jsx'
import Home from './views/Home.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', 
    element:<App />, 
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/posts/new',
        element: <PostEdit/>
      },
      {
        path: '/posts/',
        element: <Posts/>
      },
      {
        path: '/posts/1',
        element: <PostDetail/>
      }
    ]
  }, 

  {path: '/posts/new', element: <PostEdit/>}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
