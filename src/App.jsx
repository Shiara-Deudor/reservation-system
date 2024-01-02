import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import AuthDetails from './components/auth/AuthDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignIn/>
      <SignUp/>
      <AuthDetails/>
    </>
  )
}

export default App
