import './index.css'
import Home from './pages/Home/Home'
import JobDetails from './pages/JobDetails/JobDetail'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'

function App() {

  return (
    <>
    <Header></Header>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/jobs/:id' element={<JobDetails/>}></Route>
     </Routes>
    </>
  )
}

export default App
