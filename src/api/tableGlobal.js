import { useEffect, useState } from "react";
function GlobalTable(props) {
  const [data, setData] = useState([]);
  const apiPostTbl = "https://covid-193.p.rapidapi.com/statistics";

  useEffect(() => {
    fetch(apiPostTbl, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "568cd133bbmshb727f89d2da78d6p192e4djsnc6938c201e7d",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((response) => {
        console.log(response.response);
        setData(response.response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const renderTable = () => {
    return data.map((user) => {
      return (
          <tr>
            <td>{user.country}</td>
            <td>{user.cases.total}</td>
            <td>{user.cases.new}</td>
            <td>{user.deaths.total}</td>
            <td>{user.deaths.new}</td>
            <td>{user.cases.recovered}</td>
            <td>{user.cases.new}</td>
          </tr>

      );
    });
  };

  return (
    <div>
      <section className="table-container">
        <div className="global-cases">
          <h1>Global Cases Table</h1>
          <table>
           <tbody>
            <tr>
              <th>Country</th>
              <th>Cases</th>
              <th>New Cases</th>
              <th>Deaths</th>
              <th>New Deaths</th>
              <th>Recoveries</th>
              <th>New Recoveries</th>
            </tr>
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
