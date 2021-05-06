import '../styles/skeleton.css'
const BasicSkeleton = ({ type }) => {
  const classes = `skeleton ${type}`;

  return (
    <div className={classes}>
      <div className="shimer"></div>
    </div>
  )
}

export default BasicSkeleton;