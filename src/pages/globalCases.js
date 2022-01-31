import GlobalTable from "../api/tableGlobal";

function GlobalCases(){
    return(
        <div className="globalcases-container">
         <p>Cases As Of: {Date().toLocaleString()}</p>
              <div className="table-div">
              <GlobalTable></GlobalTable>
              </div>
        </div>
    )
}

export default GlobalCases;