import { Route, Switch } from "react-router-dom"
import Home from "./Home"
import List from "./List"
import '../styles/main.css'

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" children={<Home/>} />
        <Route exact path="/daftar-tim" children={<List/>} />
      </Switch>
    </main>
  )
}

export default Main