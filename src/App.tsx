import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Login from './screen/login'
import Main from './screen/main'
import Login from './screen/login'
import ProtectedRoute from './components/protectroute'
import { useContext, useEffect, useState } from 'react'

function App() {

  return (

    <>    
      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path='/main'
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
