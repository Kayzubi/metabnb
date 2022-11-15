import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './styles/main.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='main'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
