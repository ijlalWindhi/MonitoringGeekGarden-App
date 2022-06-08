import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App