const WrapperSkeleton = ({  heightWrapper, child }) => {
  return <div className="wrapper" style={{ height: `${heightWrapper}px` }}>
    {child}
  </div>
}
export default WrapperSkeleton