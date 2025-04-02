const Services = () => {
  const services = [
    {
      icon: '🚀',
      title: 'Digital Strategy',
      description: 'Strategic planning and consulting to help your business thrive in the digital age.',
    },
    {
      icon: '💡',
      title: 'Product Design',
      description: 'User-centered design solutions that create meaningful experiences.',
    },
    {
      icon: '⚡',
      title: 'Development',
      description: 'Custom software development using cutting-edge technologies.',
    },
    {
      icon: '📈',
      title: 'Growth Marketing',
      description: 'Data-driven marketing strategies to accelerate your business growth.',
    },
  ];

  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">What We Do</h2>
        <p className="section-description">
          We provide end-to-end digital solutions to help your business succeed in today's competitive landscape.
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 