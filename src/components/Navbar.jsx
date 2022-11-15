import Logo from './assets/navlogo.svg'
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar container'>
      <div className='navbar__brand'>
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
      </div>
      <nav>
        <div className='navbar__toggle'></div>
        <ul className='navbar__links'>
          <li className='navbar__links-item'>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li className='navbar__links-item'>
            <NavLink to={'/place'}>Place to stay</NavLink>
          </li>
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
