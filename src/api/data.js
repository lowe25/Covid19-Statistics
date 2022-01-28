import { useState, useEffect } from "react";
import Landing from "../pages/landing";
import Searchcountry from "./searchCountry";
function Data(props) {
  const [totalCases, setTotalcases] = useState();
  const [totalDeaths, setTotalDeaths] = useState();
  const [totalRecoveries, setTotalReco] = useState();
  const globalStatus =
    "https://covid-193.p.rapidapi.com/statistics?country=all";

  useEffect(() => {
    fetch(globalStatus, {
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
        console.log(response);
        for (const data of response.response) {
          const t = data.cases.total;
          const r = data.cases.recovered;
          const d = data.deaths.total;
          const total = t.toLocaleString();
          const deaths = d.toLocaleString();
          const recoveries = r.toLocaleString();
          total.toLocaleString();
          setTotalcases(total);
          setTotalReco(recoveries);
          setTotalDeaths(deaths);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      <Landing
        totalCases={totalCases}
        totalRecoveries={totalRecoveries}
        totalDeaths={totalDeaths}
      />
      <Searchcountry />
    </div>
  );
}

export default Data;
