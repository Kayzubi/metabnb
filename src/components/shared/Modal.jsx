import { IoIosClose } from 'react-icons/io'
import { FaChevronRight } from 'react-icons/fa'
import WalletConnect from '../../components/assets/walletconnect.svg'
import Metatask from '../../components/assets/fox.svg'

function Modal({ closeModal }) {
  return (
    <div className='modal' onClick={(e) => closeModal(e)}>
      <div className='modal__content'>
        <div className='modal__header'>
          <h1 className='modal__heading'>Connect Wallet</h1>
          <button className='btn-closeModal'>
            <IoIosClose onClick={(e) => closeModal(e)} />
          </button>
        </div>
        <div className='modal__body'>
          <p>Choose your preferred wallet</p>
          <button className='btn btn-modal'>
            <img src={Metatask} alt='' /> Metamask{' '}
            <FaChevronRight className='goto' />
          </button>
          <button className='btn btn-modal'>
            <img src={WalletConnect} alt='' /> WalletConnect{' '}
            <FaChevronRight className='goto' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
