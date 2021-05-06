import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import '../styles/detail.css'

const DetailClub = () => {
  let { id_team } = useParams();
  const [detail, setDetail] = useState([]);

  const getDetail = async (id_team) => {
    const response = await fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id_team}`)
    const data = await response.json();
    setDetail(data.teams);
  }

  useEffect(() => {
    getDetail(id_team)
  }, [])
console.log(detail[0]);
  return (
    <div className="container">
      <Link to="/daftar-tim" className="back-button"> { "<< " }Kembali </Link>
      {detail[0] !== undefined ? <h2>{detail[0].strTeam}</h2> :
      <h2>Nama Tim</h2>
      }
    </div>
  )
}

export default DetailClub;