import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Welcome from './pages/Welcome';
import { paths } from './utils/routes';
import Home from './pages/Home';
import Room from './pages/Room';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Root from './pages/Root';
import Reservation from './pages/Reservation';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: paths.signIn, element: <SignIn />},
      { path: paths.signUp, element: <SignUp />},
      { path: paths.home, element: <Home />},
      { path: paths.room, element: <Room />},
      { path: paths.reservation, element: <Reservation />},
    ]
  }
])


function App() {
    return <RouterProvider router={router} />
}

export default App
