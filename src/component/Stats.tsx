import '../styles/Stats.css';

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats-container">
        <div className="stats-header">
          <h2>Our Impact in Numbers</h2>
          <div className="header-decoration">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-icon community"></div>
              <span className="stat-number">25+</span>
              <h3>Community Members</h3>
            </div>
            <div className="stat-bg"></div>
          </div>

          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-icon connections"></div>
              <span className="stat-number">0+</span>
              <h3>Successful Connections</h3>
            </div>
            <div className="stat-bg"></div>
          </div>

          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-icon partners"></div>
              <span className="stat-number">2+</span>
              <h3>Partner Companies</h3>
            </div>
            <div className="stat-bg"></div>
          </div>

          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-icon events"></div>
              <span className="stat-number">0+</span>
              <h3>Events Hosted</h3>
            </div>
            <div className="stat-bg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 