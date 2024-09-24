const servicesData = [
  "Search Engine Optimization (SEO)",
  "Website & E-Commerce Development",
  "Social Media Management & Marketing",
  "Ad Campaign Creation & Strategy",
  "Content Writing for Ads & Websites",
];

const Services = () => {
  return (
    <section className="services">
      <h2>My Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div key={index} className="service-item">
            {service}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
