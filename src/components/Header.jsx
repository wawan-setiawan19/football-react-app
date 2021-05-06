import { Link } from "react-router-dom";
import "../styles/header.css"

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="brand-name">Data Sepakbola</div>
        <nav>
          <ul>
            <li>
              <Link className="link" to="/">Beranda</Link>
              </li>
            <li>
              <Link className="link" to="/daftar-tim">Daftar Tim</Link>
              </li>
          </ul>
        </nav>
      </div>
    </header>    
  );
}

export default Header;