
import './App.css'

import GamePage from './pages/GamePage'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ProfilePage from './pages/ProfilePage'

import IsPrivate from './components/IsPrivate'
import IsAnon from './components/IsAnon'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path='/' element={<HomePage />}/>
        <Route path="/signup" element={<IsAnon><SignupPage /></IsAnon>} />
        <Route path="/login" element={<IsAnon><LoginPage /></IsAnon>} />
        <Route path='/game' element={<IsPrivate><GamePage /></IsPrivate>} />
        <Route path='profile' element={<IsPrivate><ProfilePage /></IsPrivate>}/>
      </Routes>
      
    </div>
  )

}

export default App
