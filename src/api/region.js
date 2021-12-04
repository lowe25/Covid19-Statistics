import { useEffect, useState } from "react";
function Region() {
  const [region, setRegion] = useState([]);
  //Continents Data
  useEffect(() => {
    fetch(
      "https://covid-19-coronavirus-statistics2.p.rapidapi.com/continentData",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-coronavirus-statistics2.p.rapidapi.com",
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
      .then((response) => {
        setRegion(response.result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const renderTable = () => {
    return region.map((user) => {
      return (
        <div>
          <div className="box-regions">
            <table>
            <tbody>
              <tr>
                <td>Region:</td>
                <td className="continent">{user.continent}</td>
              </tr>
              <tr>
                 <td>Total Cases:</td>
                <td>{user.totalCases}</td>
              </tr>
              <tr>
                <td>Total Deaths:</td>
                <td>{user.totalDeaths}</td>
              </tr>
              <tr>
                <td>Total Recovered:</td>
                <td>{user.totalRecovered}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    });
  };
  return <div className="regionCases">{renderTable()}</div>;
}
export default Region;
