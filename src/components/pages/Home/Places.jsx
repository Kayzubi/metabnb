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
    { place: Place1, id: 1 },
    { place: Place2, id: 2 },
    { place: Place3, id: 3 },
    { place: Place4, id: 4 },
    { place: Place5, id: 5 },
    { place: Place6, id: 6 },
    { place: Place7, id: 8 },
    { place: Place8, id: 9 },
  ]

  return (
    <div className='grid'>
      {places.map((place) => {
        return (
          <div key={place.id} className='card-box'>
            <Card image={place.place} />
          </div>
        )
      })}
    </div>
  )
}

export default Places
