import "./App.scss";
import Data from "./api/data";
import GlobalTable from "./api/tableGlobal";
import Footer from "./components/footer";
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
