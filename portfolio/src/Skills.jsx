import "./App.css";

// Import logos
//import pythonLogo from "../assets/logos/python.png";
//import mlLogo from "../assets/logos/ml.png";
//import dlLogo from "../assets/logos/dl.png";
//import nlpLogo from "../assets/logos/nlp.png";
//import genAILogo from "../assets/logos/genai.png";
//import excelLogo from "../assets/logos/excel.png";
//import powerBILogo from "../assets/logos/powerbi.png";
//import reactLogo from "../assets/logos/react.png";

const skillsData = [
  { name: "Python" },
  { name: "Machine Learning"  },
  { name: "Deep Learning"},
  { name: "NLP" },
  { name: "Generative AI" },
  { name: "Excel" },
  { name: "Power BI"},
  { name: "React",},
];

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.logo} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
