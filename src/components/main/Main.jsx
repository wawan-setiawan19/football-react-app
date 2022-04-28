import { Route, Switch } from "react-router-dom"
import Home from "./Home"
import '../../styles/main.css'
import DetailClub from "../ListTeams"
import List from "./ListLeague"

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" children={<Home/>} />
        <Route exact path="/daftar-tim" children={<List />} />
        <Route path="/:id_team" children={<DetailClub/>} />
      </Switch>
    </main>
  )
}

export default Main