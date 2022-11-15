import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './styles/main.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import PlaceToStay from './components/pages/Places/PlaceToStay'
import { useState, useEffect } from 'react'
import Modal from './components/shared/Modal'

function App() {
  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    setModalOpen(false)
  }, [])

  const openModal = () => setModalOpen(true)

  const closeModal = (e) => {
    if (
      e.target.className === 'modal' ||
      e.target.parentElement.className === 'btn-closeModal'
    ) {
      setModalOpen(false)
    }
  }

  return (
    <Router>
      <div className={isModalOpen ? 'App o-hidden' : 'App'}>
        {isModalOpen && <Modal closeModal={closeModal} />}
        <Navbar openModal={openModal} />
        <div className='main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/place' element={<PlaceToStay />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
