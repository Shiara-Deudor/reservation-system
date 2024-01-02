import { Outlet } from 'react-router-dom'
import React from 'react'
import Navbar from '../components/Navbar'

const Root = () => {
  return (
    <>
        <Navbar />
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default Root
