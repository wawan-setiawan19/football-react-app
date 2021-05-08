import '../styles/skeleton.css'
const BasicSkeleton = ({ type, widthSkeleton }) => {
  const classes = `skeleton ${type}`;

  return (
    <div className={classes} style={{width:`${widthSkeleton}px`,}}>
      <div className="shimer"></div>
    </div>
  )
}

export default BasicSkeleton;