import { ReactComponent as Navlogo } from './assets/navlogo.svg'

function Navbar() {
  return (
    <div className='navbar container'>
      <div className='navbar__brand'>
        <Navlogo />
      </div>
      <div className='navbar__toggle'></div>
      <div className='navbar__links'>
        <p className='navbar__links-item'>Home</p>
        <p className='navbar__links-item'>Place to stay</p>
        <p className='navbar__links-item'>NFTs</p>
        <p className='navbar__links-item'>Community</p>
      </div>
      <div className='navbar__button'>
        <button className='btn btn-primary'> Connect wallet</button>
      </div>
    </div>
  )
}

export default Navbar
