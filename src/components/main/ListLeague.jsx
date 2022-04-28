import { useState, useEffect } from "react";
import Card from "../Card";
import Footer from "./Footer";
import '../../styles/list.css'
import CardSkeleton from "../../skeletons/CardSkeleton"
import { Link } from "react-router-dom";
import { getDataFromAPI } from "../../helpers/api";


const List = () => {
  const [list, setList] = useState(null);
  const getData = async () => {
    const response = await getDataFromAPI('competitions','plan=TIER_ONE')
    const data = await response.json();
    setList(data.competitions);
  }

  useEffect(() => {
    getData();
  }, []);
 
  return (
    <>
      <div className="container">
        <h1>Daftar Tim</h1>
        <div className='list'>
          {list === null ?
            [1, 2, 3, 4, 5].map(n => (<CardSkeleton key={ n }/>)) :
            list.map(element => (
              <Link to={`${element.id}`} className="card-link" key={element.id}>
                <Card
                  nama_tim={element.name}
                  logo = {element.emblemUrl}
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