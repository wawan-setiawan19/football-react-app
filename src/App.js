import { BrowserRouter } from "react-router-dom";
import Header from "./components/main/Header";
import Main from "./components/main/Main";

function App() {
  const hostUrl = window.location.hostname
  return(
  <BrowserRouter basename={hostUrl}>
    <div className="App">
        <Header />
        <Main />
    </div>
    </BrowserRouter>
  )
}

export default App;
