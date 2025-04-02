import dropbox from '../company-logos/dropbox.png';
import revolut from '../company-logos/revolut.png';
import pitch from '../company-logos/pitch.png';
import blinklist from '../company-logos/blinklist.png';
import classpass from '../company-logos/classpass.png';
import canva from '../company-logos/canva.png';
import godaddy from '../company-logos/godaddy.png';
import twitter from '../company-logos/twitter.png';
const FeaturedJobs = () => {
  const jobs = [
    {
      logo: revolut,
      company: "Revolut",
      title: "Email Marketing",
      location: "Madrid, Spain",
      type: "Full Time",
      description: "Revolut is looking for Email Marketing to help team ma...",
      tags: ["Marketing", "Design"]
    },
    {
      logo:dropbox,
      company: "Dropbox",
      title: "Brand Designer",
      location: "San Fransisco, US",
      type: "Full Time",
      description: "Dropbox is looking for Brand Designer to help the team t...",
      tags: ["Design", "Business"]
    },
    {
      logo: pitch,
      company: "Pitch",
      title: "Email Marketing",
      location: "Berlin, Germany",
      type: "Full Time",
      description: "Pitch is looking for Customer Manager to join marketing t...",
      tags: ["Marketing"]
    },
    {
      logo: blinklist,
      company: "Blinklist",
      title: "Visual Designer",
      location: "Granada, Spain",
      type: "Full Time",
      description: "Blinklist is looking for Visual Designer to help team desi...",
      tags: ["Design"]
    },
    {
      logo: classpass,
      company: "ClassPass",
      title: "Product Designer",
      location: "Manchester, UK",
      type: "Full Time",
      description: "ClassPass is looking for Product Designer to help us...",
      tags: ["Marketing", "Design"]
    },
    {
      logo: canva,
      company: "Canva",
      title: "Lead Designer",
      location: "Ontario, Canada",
      type: "Full Time",
      description: "Canva is looking for Lead Engineer to help develop n...",
      tags: ["Design", "Business"]
    },
    {
      logo: godaddy,
      company: "GoDaddy",
      title: "Brand Strategist",
      location: "Marseille, France",
      type: "Full Time",
      description: "GoDaddy is looking for Brand Strategist to join the team...",
      tags: ["Marketing"]
    },
    {
      logo: twitter,
      company: "Twitter",
      title: "Data Analyst",
      location: "San Diego, US",
      type: "Full Time",
      description: "Twitter is looking for Data Analyst to help team desi...",
      tags: ["Technology"]
    }
  ];

  const getTagStyle = (tag) => {
    switch (tag.toLowerCase()) {
      case 'marketing':
        return 'tag-marketing';
      case 'design':
        return 'tag-design';
      case 'business':
        return 'tag-business';
      case 'technology':
        return 'tag-technology';
      default:
        return '';
    }
  };

  return (
    <section className="featured-jobs">
      <div className="container">
        <div className="featured-header">
          <h2>Featured <span>jobs</span></h2>
          <a href="#" className="show-all">
            Show all jobs
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4.16666 10H15.8333" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 4.16666L15.8333 10L10 15.8333" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="jobs-grid">
          {jobs.map((job, index) => (
            <div key={index} className="job-card">
              <div className="job-header">
                <img src={job.logo} alt={job.company} className="company-logo" />
                <span className="job-type">{job.type}</span>
              </div>
              <h3>{job.title}</h3>
              <div className="company-info">
                <span>{job.company}</span>
                <span className="dot">•</span>
                <span>{job.location}</span>
              </div>
              <p className="job-description">{job.description}</p>
              <div className="job-tags">
                {job.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={`tag ${getTagStyle(tag)}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs; 