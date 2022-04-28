import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getDataFromAPI } from "../helpers/api";
import BasicSkeleton from "../skeletons/BasicSkeleton";
import WrapperSkeleton from "../skeletons/WrapperSkeleton";
import '../styles/detail.css'

const Club = () => {
  let { id_team } = useParams();
  const [tim, setTim] = useState([]);
  console.log(id_team)
  const getTim = async (id_team) => {
    const response = await getDataFromAPI(`competitions/${id_team}/teams`)
    const data = await response.json();
    setTim(data.competition);
  }

  useEffect(() => {
    getTim(id_team)
  }, [id_team])
  
console.log(tim[0]);
  return (
    <div className="container">
      <Link to="/daftar-tim" className="back-button"> { "<< " }Kembali </Link>
      {tim !== undefined ? <h2>{tim.name}</h2> :
      <h2>Nama Tim</h2>
      }
      <WrapperSkeleton
        child={
          <>
            <BasicSkeleton type="image" widthSkeleton="150"/>
            <BasicSkeleton type="title" widthSkeleton="100%"/>
            <BasicSkeleton type="text" widthSkeleton="100%"/>
            <BasicSkeleton type="text" widthSkeleton="100%"/>
            <BasicSkeleton type="text" widthSkeleton="100%"/>
          </>
      }
      />
      <WrapperSkeleton
        heightWrapper='200'
        child={
          <div style={{position:"absolute", bottom:'10px'}}>
            <BasicSkeleton type="title" widthSkeleton="200" />
            <BasicSkeleton type="text" widthSkeleton="250" />
          </div>
        }
      />
    </div>
  )
}

export default Club;