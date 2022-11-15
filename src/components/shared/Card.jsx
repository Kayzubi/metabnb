import { FaStar, FaHeart } from 'react-icons/fa'

function Card({ image }) {
  return (
    <div className='card'>
      <div className='card__image'>
        <FaHeart className='card__like' />
        <img src={image} alt='' />
      </div>
      <div className='card__details'>
        <div className='card__details-row'>
          <p>Desert king</p>
          <p className='bold'>1MBT per night</p>
        </div>
        <div className='card__details-row'>
          <p className='card__distance'>2345km away</p>
          <p className='card__status'>available for 2weeks stay</p>
        </div>
        <div className='card__details-stars'>
          <FaStar className='text-primary' />
          <FaStar className='text-primary' />
          <FaStar className='text-primary' />
          <FaStar className='text-primary' />
          <FaStar className='text-primary' />
        </div>
      </div>
    </div>
  )
}

export default Card
