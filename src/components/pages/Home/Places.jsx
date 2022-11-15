import Place1 from '../../assets/Frame 151 (4).svg'
import Place2 from '../../assets/Frame 151 (5).svg'
import Place3 from '../../assets/Frame 151 (6).svg'
import Place4 from '../../assets/Frame 151 (7).svg'
import Place5 from '../../assets/Frame 151.svg'
import Place6 from '../../assets/Frame 151 (1).svg'
import Place7 from '../../assets/Frame 151 (2).svg'
import Place8 from '../../assets/Frame 151 (3).svg'
import Card from '../../shared/Card'

function Places() {
  const places = [
    Place1,
    Place2,
    Place3,
    Place4,
    Place5,
    Place6,
    Place7,
    Place8,
  ]

  return (
    <div className='grid'>
      {places.map((place) => {
        return (
          <div className='card-box'>
            <Card image={place} />
          </div>
        )
      })}
    </div>
  )
}

export default Places
