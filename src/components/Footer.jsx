import vodafone from '../company-logos/jobhuntly1.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              {/* <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#4640DE"/>
                <path d="M16.5 8L23 12V20L16.5 24L10 20V12L16.5 8Z" fill="white"/>
              </svg> */}
              <img style={{backgroundColor: '#25324B', borderRadius: '10px'}} src={vodafone} alt="logo" />
              <span>JobHuntly</span>
            </div>
            <p>Great platform for the job seeker that passionate about startups. Find your dream job easier.</p>
          </div>

          <div className="footer-section">
            <h4>About</h4>
            <ul>
              <li><a href="#">Companies</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Advice</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Help Docs</a></li>
              <li><a href="#">Guide</a></li>
              <li><a href="#">Updates</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get job notifications</h4>
            <p>The latest job news, articles, sent to your inbox weekly.</p>
            <div className="subscribe-form">
              <input type="email" placeholder="Email Address" />
              <button className="button button-primary">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>2021 @ JobHuntly. All rights reserved.</p>
          <div className="social-links">
            <a href="#" className="social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className="social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className="social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 6.16c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.81-2.6 1a4.1 4.1 0 00-7 3.74c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 001.27 5.47c-.67-.02-1.3-.2-1.86-.5v.05a4.1 4.1 0 003.3 4.02 4.1 4.1 0 01-1.86.07 4.1 4.1 0 003.83 2.85A8.23 8.23 0 012 18.43a11.62 11.62 0 006.29 1.84c7.55 0 11.67-6.25 11.67-11.67 0-.18 0-.36-.01-.53.8-.58 1.5-1.3 2.05-2.12z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className="social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.276 25.276 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.686 8.686 0 0112 3.475zm-3.633.803a53.903 53.903 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.309 35.309 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 