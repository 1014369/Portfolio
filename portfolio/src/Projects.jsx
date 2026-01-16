import "./App.css";

const projectsData = [
  {
    title: "Predictive Sales Model",
    tech: "Python, ML, Pandas, scikit-learn",
    description: "Built a model to forecast sales based on historical data.",
    link: "https://github.com/yourusername/predictive-sales",
  },
  {
    title: "NLP Sentiment Analyzer",
    tech: "Python, NLP, NLTK, scikit-learn",
    description: "Analyzed customer reviews to determine sentiment trends.",
    link: "https://github.com/yourusername/nlp-sentiment",
  },
  {
    title: "Generative AI Chatbot",
    tech: "Python, GPT, Flask",
    description: "Created a chatbot that generates context-aware responses.",
    link: "https://github.com/yourusername/genai-chatbot",
  },
  {
    title: "Power BI Dashboard",
    tech: "Power BI, Excel",
    description: "Developed interactive dashboards for business KPIs.",
    link: "https://github.com/yourusername/powerbi-dashboard",
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-card"
            key={index}
          >
            <h3>{project.title}</h3>
            <p className="tech">{project.tech}</p>
            <p className="desc">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
