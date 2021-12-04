import Region from "../api/region";
function Landing(props, { data }) {
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
          <p>Cases As Of: {Date().toLocaleString()}</p>
        </div>

        

        <div className="globalCases-container">
          <h1 className="global">Global Cases:</h1>
          <div className="boxes-container">
            <div className="box">
              <p>Total Cases: {props.totalCases}</p>
            </div>
            <div className="box">
              <p>Total Recoveries: {props.totalRecoveries}</p>
            </div>
            <div className="box">
              <p>Total Deaths: {props.totalDeaths}</p>
            </div>
          </div>
        </div>

        <div className="regionalCases-container">
        <Region />
        </div>
      </section>
    </div>
  );
}

export default Landing;
