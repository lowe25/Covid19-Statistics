import whoLogo from "../assets/img/who-logo.png";
import unicefLogo from "../assets/img/unicef-logo.png";
function Footer(){
    return(
        <div>
            <footer className="footer">
               <p>For More Information About Covid 19 Click on the Logo Below</p>
                <div className="healthorgs-div">
                 <div className="img-1">
                 <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" rel="noopener noreferrer" target="_blank" ><img src={whoLogo} alt="World Health Organization Covid 19"></img></a>
                 </div>
                 <div className="img-2">
                 <a href="https://www.unicef.org/coronavirus/covid-19" rel="noopener noreferrer" target="_blank"><img src={unicefLogo} alt="Unicef Covid"></img>
</a>
                 </div>
                </div>
                <p><i className="far fa-copyright"></i>Allrights Reserved 2021</p>
            </footer>
        </div>
    )
}

export default Footer;