import '../styles/footer.css'
const Footer = ({ background }) => {
  const style = {
    backgroundColor: background,
  }
  return (
    <footer style={style}>
      <div className="not-mobile">
        Copyright 2021 by Wawan develop with React JS
      </div>
      <div className="mobile">
        Copyright 2021 by Wawan
      </div>
    </footer>
  )
}

export default Footer