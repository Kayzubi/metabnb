import { ReactComponent as Logo } from './assets/footerlogo.svg'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-1-of-4'>
            <Logo />
            <div className='icons'>
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
          <div className='col-1-of-4'>
            <h4 className='footer__heading'>Community</h4>
            <ul className='footer__list'>
              <li className='footer__list-item'>NFT</li>
              <li className='footer__list-item'>Token</li>
              <li className='footer__list-item'>Landlords</li>
              <li className='footer__list-item'>Discord</li>
            </ul>
          </div>
          <div className='col-1-of-4'>
            <h4 className='footer__heading'>Places</h4>
            <ul className='footer__list'>
              <li className='footer__list-item'>Castle</li>
              <li className='footer__list-item'>Farms</li>
              <li className='footer__list-item'>Beach</li>
              <li className='footer__list-item'>Learn more</li>
            </ul>
          </div>
          <div className='col-1-of-4'>
            <h4 className='footer__heading'>About Us</h4>
            <ul className='footer__list'>
              <li className='footer__list-item'>Road map</li>
              <li className='footer__list-item'>Creators</li>
              <li className='footer__list-item'>Career</li>
              <li className='footer__list-item'>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className='footer__lower'>
          <p>&copy; 2020 Metabnb</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
