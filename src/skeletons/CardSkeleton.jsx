import '../styles/card.css'
import BasicSkeleton from './BasicSkeleton'
const CardSkeleton = () => {
  return (
    <div className="card card-skeleton">
      <BasicSkeleton type="image"/>
      <BasicSkeleton type="title" widthSkeleton="100%"/>
    </div>
  )
}

export default CardSkeleton;