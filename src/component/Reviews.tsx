import '../styles/Reviews.css';

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="reviews-container">
        <h2>Your Journey With LinkUp</h2>
        
        <div className="flowchart">
          <div className="flow-start">
            <div className="flow-node">
              <span className="node-icon">👤</span>
              <h3>Sign Up</h3>
              <p>Begin Your Journey</p>
            </div>
          </div>

          <div className="flow-paths">
            {/* Path 1 - Profile & Rewards */}
            <div className="flow-branch">
              <div className="flow-node">
                <span className="node-icon">📝</span>
                <h3>Complete Profile</h3>
                <p>Share Your Story</p>
              </div>
              
              <div className="flow-node">
                <span className="node-icon">🤝</span>
                <h3>Get Recommended</h3>
                <p>AI-Powered Matches</p>
              </div>

              <div className="flow-node reward">
                <span className="node-icon">💰</span>
                <h3>Earn USDC</h3>
                <p>Network Rewards</p>
              </div>
            </div>

            {/* Path 2 - Engagement & Growth */}
            <div className="flow-branch">
              <div className="flow-node">
                <span className="node-icon">🌟</span>
                <h3>Engage & Connect</h3>
                <p>Build Relationships</p>
              </div>

              <div className="flow-node">
                <span className="node-icon">📈</span>
                <h3>Grow Network</h3>
                <p>Expand Opportunities</p>
              </div>

              <div className="flow-node reward">
                <span className="node-icon">⚡</span>
                <h3>Earn Solana</h3>
                <p>Activity Rewards</p>
              </div>
            </div>
          </div>

          <div className="flow-end">
            <div className="flow-node success">
              <span className="node-icon">🚀</span>
              <h3>Grow Together</h3>
              <p>Achieve Success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews; 