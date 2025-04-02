import heroImage from '../assets/hero-image.jpg';
import vodafone from '../company-logos/vodafone.png';
import intel from '../company-logos/intel.png';
import tesla from '../company-logos/tesla.png';
import amd from '../company-logos/amd.png';
import talkit from '../company-logos/talkit.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Discover<br />
              more than<br />
              <span>5000+ Jobs</span>
            </h1>
            <p>
              Great platform for the job seeker that searching for
              new career heights and passionate about startups.
            </p>
            
            <div className="search-box">
              <div className="search-input">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#7C8493" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21L16.65 16.65" stroke="#7C8493" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input type="text" placeholder="Job title or keyword" />
              </div>
              <div className="location-input">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#7C8493" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#7C8493" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <select>
                  <option>Florence, Italy</option>
                  <option>Rome, Italy</option>
                  <option>Milan, Italy</option>
                </select>
              </div>
              <button className="search-button">Search my job</button>
            </div>

            <div className="popular-searches">
              <span>Popular:</span>
              <div className="tags">
                <a href="#" className="tag">UI Designer</a>
                <a href="#" className="tag">UX Researcher</a>
                <a href="#" className="tag">Android</a>
                <a href="#" className="tag">Admin</a>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <img 
              src={heroImage}
              alt="Job Seeker"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '24px',
              }}
            />
          </div>
        </div>

        <div className="companies">
          <h3>Companies we helped grow</h3>
          <div className="company-logos">
            <img src={vodafone} alt="Vodafone" />
            <img src={intel} alt="Intel" />
            <img src={tesla} alt="Tesla" />
            <img src={amd} alt="AMD" />
            <img src={talkit} alt="Talkit" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 