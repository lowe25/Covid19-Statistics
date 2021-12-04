import { useState, useEffect } from "react";
function Searchcountry() {
  const [country, setCountry] = useState("");
  const [deaths, setDeaths] = useState();
  const [cases, setCases] = useState();
  const [reco, setReco] = useState();
  const countryApi = `https://covid-193.p.rapidapi.com/statistics?country=${country}`;

  const fetchData = () => {
    fetch(countryApi, {
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
          setCases(data.cases.total);
          setReco(data.cases.recovered);
          setDeaths(data.deaths.total);
        }
      })
      .catch((err) => {
        console.error(err);
        console.log("Error in Retrieving Data");
      });
  };

  useEffect(() => {
    fetchData();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="country-container">
      <h1 className="country">Country Cases:</h1>
      <div className="src-container">
        <p>Search Country:</p>
        <form className="form-countrySrc" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              className="txt-src"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Search Country"
            ></input>
          </div>
          <div>
            <input type="submit" className="btn-src" value="Submit" />
          </div>
        </form>
      </div>
      <div className="boxes">
        <div className="countryCases-box">
          <p>Total Cases: {cases}</p>
        </div>
        <div className="countryReco-box">
          <p>Total Recoveries: {reco}</p>
        </div>
        <div className="countryDeaths-box">
          <p>Total Deaths: {deaths}</p>
        </div>
      </div>
    </div>
  );
}
export default Searchcountry;
