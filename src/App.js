import './App.css'
import {Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import MovieList from './pages/Movieslist'
import Header from './pages/Header'
import CompanyInfo from './pages/CompanyInfo'
function App() {
  return (
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<MovieList />} />
          <Route path="*" element={<CompanyInfo />} />
        </Routes>
      </div>
    
  )
}

export default App
