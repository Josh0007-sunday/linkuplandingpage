import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section brand-section">
            <h3>LinkUp</h3>
            <p>The largest community for professional networking, offering a complete package of networking, resources, mentorship, and opportunities.</p>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <div className="folder-structure">
              <div className="folder">
                <span className="folder-name">resources/</span>
                <div className="folder-content">
                  <a href="#templates" className="file-name">templates.md</a>
                  <a href="#community" className="file-name">community.md</a>
                  <a href="#blog" className="file-name">blog.md</a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="folder-structure">
              <div className="folder">
                <span className="folder-name">quick-links/</span>
                <div className="folder-content">
                  <a href="#partnerships" className="file-name">partnerships.md</a>
                  <a href="#about" className="file-name">about-us.md</a>
                  <a href="#events" className="file-name">events.md</a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <div className="folder-structure">
              <div className="folder">
                <span className="folder-name">legal/</span>
                <div className="folder-content">
                  <a href="#terms" className="file-name">terms.md</a>
                  <a href="#privacy" className="file-name">privacy.md</a>
                  <a href="#cookies" className="file-name">cookies.md</a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="folder-structure">
              <div className="folder">
                <span className="folder-name">contact/</span>
                <div className="folder-content">
                  <span className="file-name">email: info@linkup.com</span>
                  <div className="social-links">
                    <a href="#linkedin" className="file-name">linkedin.md</a>
                    <a href="#twitter" className="file-name">twitter.md</a>
                    <a href="#instagram" className="file-name">instagram.md</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LinkUp. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 