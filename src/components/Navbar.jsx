import Logo from './assets/navlogo.svg'
import { NavLink, Link } from 'react-router-dom'
import { RiMenu3Fill } from 'react-icons/ri'
import { useState } from 'react'

function Navbar({ openModal }) {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <nav className='navbar container'>
      <Link className='navbar__brand' to='/'>
        <img src={Logo} alt='' />
      </Link>
      <button onClick={() => setNavOpen(!navOpen)} className='hamburger'>
        <RiMenu3Fill />
      </button>
      <div className='navbar__menu'>
        <div
          className={
            navOpen ? 'navbar__collapse expanded' : 'navbar__collapse'
          }>
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
          <button onClick={() => openModal()} className='btn btn-primary'>
            Connect wallet
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
