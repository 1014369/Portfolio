import "./App.css";

const certificatesData = [
  {
    title: "Data Science",
    issuer: "Coursera",
    year: "2024",
    link: "https://your-certificate-link.com",
  },
  {
    title: "MongoDB Basics",
    issuer: "MongoDB University",
    year: "2023",
    link: "https://your-certificate-link.com",
  },
  {
    title: "Python for Data Science",
    issuer: "edX",
    year: "2024",
    link: "https://your-certificate-link.com",
  },
  {
    title: "Machine Learning A-Z",
    issuer: "Udemy",
    year: "2023",
    link: "https://your-certificate-link.com",
  },
];

const Certificates = () => {
  return (
    <section className="certificates">
      <h2>Certificates</h2>
      <div className="certificates-container">
        {certificatesData.map((cert, index) => (
          <a
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className="certificate-card"
            key={index}
          >
            <h3>{cert.title}</h3>
            <p className="issuer">{cert.issuer}</p>
            <p className="year">{cert.year}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
