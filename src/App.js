import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return(
  <BrowserRouter>
    <div className="App">
        <Header />
        <Main />
    </div>
    </BrowserRouter>
  )
}

export default App;
