import { Link } from "react-router-dom";
import SIDEBAR from "../../constant/menu";
import "../../styles/header.css"


const Header = () => {
  const arrayMenu = SIDEBAR
  return (
    <header>
      <div className="container">
        <div className="brand-name">Data Sepakbola</div>
        <nav>
          <ul>
            {
              arrayMenu.map(data => (
                <li key={data.id}>
                  <Link className="link" to={data.link}>{data.menu}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>    
  );
}

export default Header;