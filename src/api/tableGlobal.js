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
        console.log(response.length);
        setData(response.response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const renderTable = () => {
    return data.map((user,index) => {
      return (
        <tr key={index}>
          <td data-label="Country">{user.country}</td>
          <td data-label="Cases">{user.cases.total}</td>
          <td data-label="New Cases">{user.cases.new}</td>
          <td data-label="Deaths">{user.deaths.total}</td>
          <td data-label="New Deaths">{user.deaths.new}</td>
          <td data-label="Recoveries">{user.cases.recovered}</td>
          <td data-label="New Recoveries">{user.cases.new}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <section className="table-container">
        <div className="global-cases">
          <h1>Global Cases Table</h1>
          <table className="global-tbl">
            <thead>
              <tr>
                <th scope="col">Country</th>
                <th scope="col">Cases</th>
                <th scope="col">New Cases</th>
                <th scope="col">Deaths</th>
                <th scope="col">New Deaths</th>
                <th scope="col">Recoveries</th>
                <th scope="col">New Recoveries</th>
              </tr>
            </thead>
            <tbody>{renderTable()}</tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default GlobalTable;
