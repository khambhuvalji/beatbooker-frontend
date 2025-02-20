import { useState } from 'react'
import './App.css'
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast';
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PublicRoute from './components/publicRoute';
import ProtectedRoute from './components/ProtectedRoute';
import UsersList from './components/UsersList';
import ApprovedSingersList from './components/ApprovedSingersList';
import PendingSingersList from './components/PendingSingersList';
import RejectedSingersList from './components/RejectedSingersList';


function App() {

  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />

        <Routes>
          <Route path='/signup' element={<PublicRoute> <Signup /> </PublicRoute>} />
          <Route path='/login' element={<PublicRoute><Login /> </PublicRoute>} />
          <Route path='/' element={<ProtectedRoute><Home /> </ProtectedRoute>} />
          <Route path='/users' element={<ProtectedRoute><UsersList /> </ProtectedRoute>} />
          <Route path='/pending-singers' element={<ProtectedRoute><PendingSingersList /> </ProtectedRoute>} />
          <Route path='/Approve-singers' element={<ProtectedRoute><ApprovedSingersList /> </ProtectedRoute>} />
          <Route path='/reject-singers' element={<ProtectedRoute><RejectedSingersList /> </ProtectedRoute>} />
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
