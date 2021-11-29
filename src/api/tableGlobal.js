import { useEffect,useState } from "react";
function GlobalTable(props) {
const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/countries",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
          "x-rapidapi-key":
            "568cd133bbmshb727f89d2da78d6p192e4djsnc6938c201e7d",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((response)=> {
        console.log(response);
        setData(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const renderTable = () =>{
      return data.map(user => {
          return(
              <tr>
                  <td>{user.Country}</td>
                  <td>{user.TotalCases}</td>
                  <td>{user.TotalDeaths}</td>
                  <td>{user.TotalRecovered}</td>
              </tr>
          )
      })
  }

  return (
    <div>
      <section className="table-container">
        <div className="global-cases">
          <h1>Global Cases Table</h1>
          <table>
          <tr>
              <th>Country</th>
              <th>Cases</th>
              <th>Deaths</th>
              <th>Recoveries</th>
            </tr>
           <tbody>
           {renderTable()}
          </tbody>
          </table>
        </div>

        <div className="region-cases">
          <h1>Region Cases Table</h1>
        </div>
      </section>
    </div>
  );
}

export default GlobalTable;
