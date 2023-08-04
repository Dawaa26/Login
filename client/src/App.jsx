import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

/* import react react dom */
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

/*чиглүүлэгч буюу router бий болгоё*/ 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
      path: '/dashboard',
      element: <Dashboard/>
  },
])

function App()  {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
