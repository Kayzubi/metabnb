import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './styles/main.scss'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='main'>
        <h1>Content</h1>
      </div>
      <Footer />
    </div>
  )
}

export default App
