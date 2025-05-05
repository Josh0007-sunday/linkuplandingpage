import '../styles/Features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="features-container">
        <h2 className="section-title">Networking Doesn't Have to be That Hard</h2>
        
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-content">
              <h3>Believe in Yourself</h3>
              <p>At LinkUp, guesswork stops. Get the tools and resources to build global connections and network confidently.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Enjoy a 100% Supportive Community</h3>
              <p>No one is self-made, there is always a community/support system that made it possible and that is what LinkUp is about.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Not Just for Tech People</h3>
              <p>We welcome professionals from all industries. Choose your interest area and connect with like-minded individuals.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Build Your Network Solid</h3>
              <p>Connect, grow, succeed. We guide you through the process of building meaningful professional relationships.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 