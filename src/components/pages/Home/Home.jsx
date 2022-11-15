import Hero from './assets/Group 4028.svg'
import Mbtoken from './assets/Mbtoken.svg'
import Metatask from './assets/Metatask.svg'
import Opensea from './assets/Opensea.svg'
import Composition from '../../assets/Frame 59546.svg'

import Searchbar from '../../shared/Searchbar'
import Places from './Places'

function Home() {
  return (
    <div className='home'>
      <div className='container'>
        <section id='hero' className='hero'>
          <div className='hero__left hero__col'>
            <h1 className='hero__heading heading'>
              Rent a <span className='text-primary bold'>Place</span> away from
              <span className='text-primary bold'> Home</span> in the
              <span className='text-primary bold'> Metaverse</span>
            </h1>
            <p className='hero__text'>
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <Searchbar />
          </div>
          <div className='hero__right hero__col'>
            <img src={Hero} alt='' className='hero__img' />
          </div>
        </section>
      </div>
      <div className='sponsors'>
        <div className='container'>
          <div className='sponsor sponsor-1'>
            <img src={Mbtoken} alt='' />
          </div>
          <div className='sponsor sponsor-2'>
            <img src={Metatask} alt='' />
          </div>
          <div className='sponsor sponsor-3'>
            <img src={Opensea} alt='' />
          </div>
        </div>
      </div>
      <section id='inspirations' className='section__inspirations'>
        <div className='container'>
          <h2 className='heading__secondary heading bold'>
            Inspiration for your next adventure
          </h2>
          <Places />
        </div>
      </section>
      <section id='nfts' className='section__nfts'>
        <div className='container'>
          <div className='section__nfts-left'>
            <h1>Metabnb NFTs</h1>
            <p>
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            <button className='btn btn-white'>Learn more</button>
          </div>
          <div className='section__nfts-right'>
            <div className='composition'>
              <img
                src={Composition}
                alt=''
                className='composition__image composition__image-1'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
