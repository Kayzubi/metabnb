import { ReactComponent as Navlogo } from './assets/navlogo.svg'

function Navbar() {
  return (
    <div className='navbar container'>
      <div className='navbar__brand'>
        <Navlogo />
      </div>
      <nav>
        <div className='navbar__toggle'></div>
        <ul className='navbar__links'>
          <li className='navbar__links-item'>Home</li>
          <li className='navbar__links-item'>Place to stay</li>
          <li className='navbar__links-item'>NFTs</li>
          <li className='navbar__links-item'>Community</li>
        </ul>
        <div className='navbar__button'>
          <button className='btn btn-primary'> Connect wallet</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
