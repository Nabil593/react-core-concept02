import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './assets/Components/Root/Root.jsx'
import Home from './assets/Home/Home.jsx'
import Chandu from './assets/Components/Chandu/Chandu.jsx'
import Users from './assets/Components/Users/Users.jsx'
import Users02 from './assets/Components/Users02/Users02.jsx'


const usrPromise = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json());

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index: true, Component: Root},
      {path: 'home', Component: Home},
      {path: 'chandu', Component: Chandu},
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'users02',
        element: <Suspense fallback= {<span>Loading...</span>}>
          <Users02 usrPromise = {usrPromise}/>
        </Suspense>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
