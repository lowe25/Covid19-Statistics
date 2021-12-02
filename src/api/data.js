import { useState, useEffect } from "react";
import Landing from "../pages/landing";
function Data(props) {
  const [totalCases, setTotalcases] = useState();
  const [totalDeaths, setTotalDeaths] = useState();
  const [totalRecoveries, setTotalReco] = useState();
  const globalStatus = "https://covid-193.p.rapidapi.com/statistics?country=all";
  useEffect(() => {
    fetch(
      globalStatus,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
          "x-rapidapi-key": "568cd133bbmshb727f89d2da78d6p192e4djsnc6938c201e7d",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((response) => {
        console.log(response);
        for(const data of response.response){
          setTotalcases(data.cases.total)
          setTotalReco(data.cases.recovered);
          setTotalDeaths(data.deaths.total)
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
    </div>
  );
}

export default Data;
