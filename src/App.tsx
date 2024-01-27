import './App.css'
import CreateTask from './Components/CreateTask/CreateTask'
import EditTask from './Components/EditTask/EditTask'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import LandingPage from './Pages/LandingPage/LandingPage'
import { Routes, Route, useLocation } from "react-router-dom"


function App() {
  const location = useLocation();

  return (
    <>
      {
        location.pathname !== "/" ? <Header /> : null
      }
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/create' element={<CreateTask />} />
        <Route path='/edit/:id' element={<EditTask />} />
      </Routes>

    </>
  )
}

export default App
