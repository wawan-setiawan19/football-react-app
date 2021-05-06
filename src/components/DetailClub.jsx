import { useParams } from "react-router";
import { Link } from "react-router-dom";
import '../styles/detail.css'

const DetailClub = () => {
  let { nama_tim } = useParams();
  return (
    <div className="container">
      <Link to="/daftar-tim" className="back-button"> { "<< " }Kembali </Link>
      <h2>{ nama_tim }</h2>
    </div>
  )
}

export default DetailClub;