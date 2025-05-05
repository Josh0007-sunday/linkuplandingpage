import '../styles/Newsletter.css';
import africaMap from '../assets/img/africa.png';
import solanaLogo from '../assets/solanaLogo.svg';
import discordLogo from '../assets/img/discord.png';
import twitterLogo from '../assets/img/twitter.png';
import usdcLogo from '../assets/img/usd-coin-usdc-logo.png';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2>Changing the Game in Africa</h2>
          <p>Building the future of decentralized networking across the continent</p>
          
          <div className="connection-map">
            <div className="map-center">
              <img src={africaMap} alt="Africa Map" className="africa-map" />
            </div>
            
            <div className="connection-icons">
              <div className="icon-wrapper solana">
                <img src={solanaLogo} alt="Solana" />
              </div>
              <div className="icon-wrapper discord">
                <img src={discordLogo} alt="Discord" />
              </div>
              <div className="icon-wrapper twitter">
                <img src={twitterLogo} alt="Twitter" />
              </div>
              <div className="icon-wrapper usdc">
                <img src={usdcLogo} alt="USDC" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 