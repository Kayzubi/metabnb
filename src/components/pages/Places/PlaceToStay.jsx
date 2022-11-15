import Place1 from '../../assets/Frame 151.svg'
import Place2 from '../../assets/Frame 151 (1).svg'
import Place3 from '../../assets/Frame 151 (2).svg'
import Place4 from '../../assets/Frame 151 (3).svg'
import Place5 from '../../assets/Frame 151 (4).svg'
import Place6 from '../../assets/Frame 151 (5).svg'
import Place7 from '../../assets/Frame 151 (6).svg'
import Place8 from '../../assets/Frame 151 (7).svg'
import Place9 from '../../assets/Frame 151 (8).svg'
import Place10 from '../../assets/Frame 151 (8).svg'
import Place11 from '../../assets/Frame 151 (10).svg'
import Place12 from '../../assets/Frame 151 (11).svg'
import Place13 from '../../assets/Frame 151 (12).svg'
import Place14 from '../../assets/Frame 151 (13).svg'
import Place15 from '../../assets/Frame 151 (14).svg'
import Place16 from '../../assets/Frame 151 (15).svg'
import Card from '../../shared/Card'
import { IoIosOptions } from 'react-icons/io'

function PlaceToStay() {
  const places = [
    Place1,
    Place2,
    Place3,
    Place4,
    Place5,
    Place6,
    Place7,
    Place8,
    Place9,
    Place10,
    Place11,
    Place12,
    Place13,
    Place14,
    Place15,
    Place16,
  ]
  return (
    <div className='place-to-stay'>
      <div className='container'>
        <ul className='list__filter'>
          <li className='list__filter-item list__filter-item1'>Resturant</li>
          <li className='list__filter-item list__filter-item2'>Cottage</li>
          <li className='list__filter-item list__filter-item3'>Castle</li>
          <li className='list__filter-item list__filter-item4'>Fantast city</li>
          <li className='list__filter-item list__filter-item5'>Beach</li>
          <li className='list__filter-item list__filter-item6'>Cabins</li>
          <li className='list__filter-item list__filter-item7'>Off-grid</li>
          <li className='list__filter-item list__filter-item8'>Farm</li>
          <li className='list__filter-item list__filter-item9'>
            <div className='filter'>
              Location <IoIosOptions />
            </div>
          </li>
        </ul>
        <div className='grid'>
          {places.map((place) => {
            return (
              <div>
                <Card image={place} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PlaceToStay
