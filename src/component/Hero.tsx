import '../styles/Hero.css';
import communityIcon from '../assets/community.svg';
import partnershipIcon from '../assets/partnership.svg';
import studentsIcon from '../assets/students.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          The largest community for
          <span className="highlight">digital networking</span>
        </h1>
        
        <p className="hero-subtitle">
          Our story is simple: If nobody will take a chance on you, take a chance on yourself. 
          And the only way to do that is to create value through <strong>LinkUp</strong>.
        </p>

        <div className="hero-cta">
          <button className="primary-btn" onClick={() => window.location.href = 'http://linkup-ruddy.vercel.app/'}>
            Get Started
          </button>
          <button className="secondary-btn" onClick={() => window.location.href = '#learn'}>
            Learn More
          </button>
        </div>

        <div className="hero-features">
          <div 
            className="feature-card"
            style={{ 
              backgroundImage: `url(${communityIcon})`,
              backgroundPosition: 'right -10%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '75% auto'
            }}
          >
            <div className="feature-content">
              <h3>Join Our Community</h3>
              <p>Connect with founders, creators, professionals, and build valuable relationships.</p>
            </div>
          </div>
          
          <div 
            className="feature-card"
            style={{ 
              backgroundImage: `url(${studentsIcon})`,
              backgroundPosition: 'right -5%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '70% auto'
            }}
          >
            <div className="feature-content">
              <h3>Expand Your Network</h3>
              <p>Access exclusive events, workshops, and networking opportunities.</p>
            </div>
          </div>
          
          <div 
            className="feature-card"
            style={{ 
              backgroundImage: `url(${partnershipIcon})`,
              backgroundPosition: 'right -15%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '80% auto'
            }}
          >
            <div className="feature-content">
              <h3>Partner With Us</h3>
              <p>We value growth-inspired collaborations and welcome partnerships.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Campus-style decorative elements */}
      <div className="campus-blur campus-blur-1"></div>
      <div className="campus-blur campus-blur-2"></div>
      <div className="campus-blur campus-blur-3"></div>
    </section>
  );
};

export default Hero; 