import "./App.scss";
import Data from "./api/data";
import GlobalTable from "./api/tableGlobal";
import Footer from "./components/footer";
import Searchcountry from "./api/searchCountry";
function App() {
  return (
    <div className="App">
      <Data />
      <Searchcountry />
      <GlobalTable/>
      <Footer />
    </div>
  );
}

export default App;
