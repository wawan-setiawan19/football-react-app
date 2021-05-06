import '../styles/card.css'
import logo_tim from '../assets/liga1.png'

const Card = ({ nama_tim, logo }) => {
  console.log(logo_tim);
  return (
    <div className="card">
      <div className="card-image">
        <img src={logo } alt={nama_tim}/>
      </div>
      <div className="card-title">
        {nama_tim}
      </div>
    </div>
  )
}

Card.defaultProps = {
  nama_tim: 'nama_tim',
  logo: logo_tim,
}

export default Card;