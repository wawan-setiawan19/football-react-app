import { useState, useEffect } from "react";
import Card from "./Card";
import Footer from "./Footer";
import '../styles/list.css'
import CardSkeleton from "../skeletons/CardSkeleton";
import { Link } from "react-router-dom";

const List = () => {
  const [tim, setTim] = useState(null);
  const getData = async () => {
    const response = await fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=Indonesian%20Super%20League')
    const data = await response.json();
    setTim(data.teams);
  }

  useEffect(() => {
    getData();
  }, []);
 
  return (
    <>
      <div className="container">
        <h1>Daftar Tim</h1>
        <div className='list'>
          {tim === null ?
            [1, 2, 3, 4, 5].map(n => (<CardSkeleton key={ n }/>)) :
            tim.map(element => (
              <Link to={element.strTeam} className="card-link" key={element.idTeam}>
                <Card
                  nama_tim={element.strTeam}
                  logo = {element.strTeamBadge}
                  />
              </Link>
            ))}
        </div>
      </div>
      <Footer background='#21400F'/>
    </>
    )
}

export default List;