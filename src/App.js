import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

//Components
import Navbar from "./components/navbar";
import Footer from "./components/footer";

//Pages
import About from "./pages/about";
import Data from "./api/data";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Data} exact />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
