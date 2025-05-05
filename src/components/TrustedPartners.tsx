import '../styles/TrustedPartners.css';
import amidarh from '../assets/img/amidarh.png';
import catoff from '../assets/img/catoff.png';

const TrustedPartners = () => {
  return (
    <section className="trusted-partners">
      <div className="partners-container">
        <h3>Trusted Partners</h3>
        
        <div className="logos-container">
          <div className="logos-track">
            <div className="logo-item">
              <img src={amidarh} alt="Amidarh" className="partner-logo" />
            </div>
            <div className="logo-item">
              <img src={catoff} alt="Catoff" className="partner-logo" />
            </div>
            <div className="logo-item">
              <img src={amidarh} alt="Amidarh" className="partner-logo" />
            </div>
            <div className="logo-item">
              <img src={catoff} alt="Catoff" className="partner-logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners; 