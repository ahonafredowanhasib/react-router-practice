import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Mobiles from './Components/Mobiles.jsx';
import Laptops from './Components/Laptops.jsx';
import Users from './Components/Users.jsx';
import Users2 from './Components/Users2.jsx';
import UserDetails from './Components/UserDetails.jsx';
import Posts from './Components/Posts.jsx';
import PostDetail from './Components/PostDetail.jsx';

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'mobiles', Component: Mobiles },
      { path: 'laptops', Component: Laptops },
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'users2',
        element: <Suspense fallback={<span> Loading...</span>}>
          <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>
      },
      {
        path: 'users/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path: 'posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      },
      {
        path: 'post/:postId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetail
      }

    ]
  },
  {
    path: '/about',
    element: <div>About me</div>
  },
  {
    path: 'blogs',
    element: <div>My blogs</div>
  },
  {
    path: 'app',
    Component: App
  },
  {
    path: '/app2',
    element: <App></App>
  },

  {
    path: '*',
    element: <h3>Not found 404</h3>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
