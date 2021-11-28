function Landing() {
  return (
    <div>
      <section className="img-landing">
        <div className="txt-landing">
          <h1>Get Real Time Covid-19 Statistics</h1>
        </div>
      </section>
      <section className="data-container">
        <div className="text">
          <h1>Covid-19 Tracker: Daily Updates</h1>
          <h1>Cases As Of Date of Today</h1>
        </div>

        <div className="globalCases-container">
          <h1 className="global">Global Cases:</h1>
          <div className="boxes-container">
            <div className="box">
            <h1>Total Cases: 1</h1>
            </div>
            <div className="box">
            <h1>Total Recoveries: 1</h1>
            </div>
            <div className="box">
            <h1>Total Deaths: 1</h1>
            </div>
          </div>
        </div>

        <div className="country-container">
          <h1 className="country">Country Cases:</h1>
          <div className="src-container">
            <p>Search Country:</p>
            <input type="textbox" placeholder="Search Country"></input>
            <input type="submit" value="Search"></input>
          </div>
          <div className="boxes">
            <div className="countryCases-box">
            <h1>Total Cases: 1</h1>
            </div>
            <div className="countryReco-box">
            <h1>Total Recoveries: 1</h1>
            </div>
            <div className="countryDeaths-box">
            <h1>Total Deaths: 1</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="table-container">
        <div className="global-cases">
          <h1>Global Cases Table</h1>
        </div>

        <div className="region-cases">
          <h1>Region Cases Table</h1>
        </div>
      </section>
    </div>
  );
}

export default Landing;
