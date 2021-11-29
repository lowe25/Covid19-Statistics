import { useState, useEffect } from "react";
import Landing from "../pages/landing";
function Data(props) {
  const [totalCases, setTotalcases] = useState();
  const [totalDeaths, setTotalDeaths] = useState();
  const [totalRecoveries, setTotalReco] = useState();

  useEffect(() => {
    fetch(
      "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world",
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
      .then((response) => {
        console.log(response);
        response.forEach((e) =>
          console.log(
            (setTotalcases(e.TotalCases),
            setTotalReco(e.TotalRecovered),
            setTotalDeaths(e.TotalDeaths))
          )
        );
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
