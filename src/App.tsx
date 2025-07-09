import './index.css'
import Home from './pages/Home/Home'
import JobDetails from './pages/JobDetails/JobDetail'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/:about' element={<JobDetails/>}></Route>
     </Routes>
    </>
  )
}

export default App
