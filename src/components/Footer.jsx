import '../styles/footer.css'
const Footer = ({ background, position }) => {
  const style = {
    backgroundColor: background,
    position: position,
  }
  return (
    <footer style={style}>
      Copyright 2021 by Wawan develop with React JS
    </footer>
  )
}

export default Footer