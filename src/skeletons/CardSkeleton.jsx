import '../styles/card.css'
import BasicSkeleton from './BasicSkeleton'
const CardSkeleton = () => {
  return (
    <div className="card">
      <BasicSkeleton type="image"/>
      <BasicSkeleton type="title" />
    </div>
  )
}

export default CardSkeleton;