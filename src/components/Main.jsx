import { Route, Switch } from "react-router-dom"
import Home from "./Home"
import List from "./List"
import '../styles/main.css'
import DetailClub from "./DetailClub"

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" children={<Home/>} />
        <Route exact path="/daftar-tim" children={<List />} />
        <Route path="/:nama_tim" children={<DetailClub/>} />
      </Switch>
    </main>
  )
}

export default Main