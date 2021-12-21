function About() {
  return (
    <div className="about-container">
    <div className="about-landing"></div>
      <div className="about-covid">
        <h1>About Covid 19</h1>
        <p>
          According to the World Health Organization (WHO). Coronavirus disease
          (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.{" "}
          <br />
          Most people infected with the virus will experience mild to moderate
          respiratory illness and recover without requiring special treatment.
          However, <br />
          some will become seriously ill and require medical attention. Older
          people and those with underlying medical conditions like
          cardiovascular disease, <br /> diabetes, chronic respiratory disease,
          or cancer are more likely to develop serious illness. Anyone can get
          sick with COVID-19 and become seriously ill <br />
          or die at any age. The best way to prevent and slow down transmission
          is to be well informed about the disease and how the virus spreads.
          <br /> Protect yourself and others from infection by staying at least
          1 metre apart from others, wearing a properly fitted mask, and washing
          your hands or using an alcohol-based <br />
          rub frequently. Get vaccinated when it’s your turn and follow local
          guidance. The virus can spread from an infected person’s mouth or nose
          in small liquid particles
          <br /> when they cough, sneeze, speak, sing or breathe. These
          particles range from larger respiratory droplets to smaller aerosols.{" "}
          <br />
          It is important to practice respiratory etiquette, for example by
          coughing into a flexed elbow, and to stay home and self-isolate until
          you recover if you feel unwell.
        </p>
      </div>

      <div className="symptom-container">
        <div className="symptoms">
          <h1>Symptoms Of COVID-19</h1>
          <ul>
            <li>Fever or chills</li>
            <li>Cough</li>
            <li>Shortness of breath or difficulty breathing</li>
            <li>Fatigue</li>
            <li>Muscle or body aches</li>
            <li>Headache</li>
            <li>New loss of taste or smell</li>
            <li>Sore throat</li>
            <li>Congestion or runny nose</li>
            <li>Nausea or vomiting</li>
            <li>Diarrhea</li>
          </ul>
        </div>

        <div className="emergency-container">
          <h1>When to Seek Emergency Medical Attention</h1>
          <ul>
            <li>Trouble breathing</li>
            <li>Persistent pain or pressure in the chest</li>
            <li>New confusion</li>
            <li>Inability to wake or stay awake</li>
            <li>
              Pale, gray, or blue-colored skin, lips, or nail beds, depending on
              skin tone
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
