import "./App.scss";
import Footer from "./components/footer";
import Data from "./api/data";
import GlobalTable from "./api/tableGlobal";
function App() {
  return (
    <div className="App">
      <Data />
      <GlobalTable/>
      <Footer />
    </div>
  );
}

export default App;
