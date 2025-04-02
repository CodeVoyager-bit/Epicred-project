import netlify from '../company-logos/netlify.png';
import nomad from '../company-logos/nomad.png';
import dropbox from '../company-logos/dropbox.png';
import maze from '../company-logos/maze.png';
import terraform from '../company-logos/terraform.png';
import udacity from '../company-logos/udacity.png';
import packer from '../company-logos/packer.png';
import webflow from '../company-logos/webflow.png';

// import heroImage from '../assets/hero-image.jpg';
// import heroImage from '../assets/hero-image.jpg';
// import heroImage from '../assets/hero-image.jpg';
// import heroImage from '../assets/hero-image.jpg';
// import heroImage from '../assets/hero-image.jpg';
// import heroImage from '../assets/hero-image.jpg';
// import heroImage from '../assets/hero-image.jpg';
// import heroImage from '../assets/hero-image.jpg';
// import heroImage from '../assets/hero-image.jpg';

const LatestJobs = () => {
  const latestJobs = [
    {
      logo: nomad,
      company: 'Nomad',
      title: 'Social Media Assistant',
      location: 'Paris, France',
      tags: ['Full-Time', 'Marketing', 'Design'],
    },
    {
      logo:netlify,
      company: 'Netlify',
      title: 'Social Media Assistant',
      location: 'Paris, France',
      tags: ['Full-Time', 'Marketing', 'Design'],
    },
    {
      logo: dropbox,
      company: 'Dropbox',
      title: 'Brand Designer',
      location: 'San Fransisco, USA',
      tags: ['Full-Time', 'Marketing', 'Design'],
    },
    {
      logo: maze,
      company: 'Maze',
      title: 'Brand Designer',
      location: 'San Fransisco, USA',
      tags: ['Full-Time', 'Marketing', 'Design'],
    },
    {
      logo:terraform,
      company: 'Terraform',
      title: 'Interactive Developer',
      location: 'Hamburg, Germany',
      tags: ['Full-Time', 'Marketing', 'Design'],
    },
    {
      logo: udacity,
      company: 'Udacity',
      title: 'Interactive Developer',
      location: 'Hamburg, Germany',
      tags: ['Full-Time', 'Marketing', 'Design'],
    },
    {
      logo: packer,
      company: 'Packer',
      title: 'HR Manager',
      location: 'Lucern, Switzerland',
      tags: ['Full-Time', 'Marketing', 'Design'],
    },
    {
      logo: webflow,
      company: 'Webflow',
      title: 'HR Manager',
      location: 'Lucern, Switzerland',
      tags: ['Full-Time', 'Marketing', 'Design'],
    },
  ];

  return (
    <section className="latest-jobs">
      <div className="container">
        <div className="section-header">
          <h2>Latest <span>jobs open</span></h2>
          <a href="#" className="view-all">
            Show all jobs
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4.16666 10H15.8333" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 4.16666L15.8333 10L10 15.8333" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="latest-jobs-grid">
          {latestJobs.map((job, index) => (
            <div key={index} className="latest-job-card">
              <div className="job-main-info">
                <div className="company-logo-wrapper">
                  <img src={job.logo} alt={job.company} className="company-logo" />
                </div>
                <div className="job-details">
                  <h3>{job.title}</h3>
                  <div className="job-meta">
                    <span className="company-location">{job.company} • {job.location}</span>
                  </div>
                </div>
              </div>

              <div className="job-tags">
                {job.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={`tag ${tag.toLowerCase().replace('-', '')}`}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestJobs; 