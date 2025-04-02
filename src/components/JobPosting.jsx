import dashboardPreview from '../assets/dashboard-preview.png';

const JobPosting = () => {
  return (
    <section className="job-posting">
      <div className="container">
        <div className="job-posting-content">
          <div className="job-posting-text">
            <h2>Start posting<br />jobs today</h2>
            <p>Start posting jobs for only $10.</p>
            <button className="button button-white">Sign Up For Free</button>
          </div>
          <div className="dashboard-preview">
            <img src={dashboardPreview} alt="Dashboard Preview" className="dashboard-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobPosting; 