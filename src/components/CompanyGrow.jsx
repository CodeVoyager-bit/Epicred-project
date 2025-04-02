import vodafone from '../company-logos/vodafone.png';
import intel from '../company-logos/intel.png';
import tesla from '../company-logos/tesla.png';
import amd from '../company-logos/amd.png';
import talkit from '../company-logos/talkit.png';

const CompanyGrow = () => {
  return (
    <section className="company-grow">
      <div className="container">
        <h2>Companies we helped grow</h2>
        <div className="company-logos">
          <img src={vodafone} alt="Vodafone" />
          <img src={intel} alt="Intel" />
          <img src={tesla} alt="Tesla" />
          <img src={amd} alt="AMD" />
          <img src={talkit} alt="Talkit" />
        </div>
      </div>
    </section>
  );
};

export default CompanyGrow; 