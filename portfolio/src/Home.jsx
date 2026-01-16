import "./App.css";
import profileImage from "./image.png"; // Replace with your image path

const Home = () => {
  return (
    <section className="home">
      <div className="home-container">
        {/* Left Info Section */}
        <div className="home-info">
          <h1>Sai Krishna</h1>
          <h2>Aspiring Data Scientist | ML Engineer</h2>
          <p>
            Data Science enthusiast with hands-on experience in ML, NLP, and
            data visualization. Passionate about solving real-world problems
            through data-driven insights.
          </p>
          <p>Python • Pandas • scikit-learn • TensorFlow • SQL • NLP</p>
          <a href="/resume/Sai_Krishna_Resume.pdf" download>
            <button className="resume-btn">Download Resume</button>
          </a>
        </div>

        {/* Right Image Section */}
        <div className="home-image">
          <img src={profileImage} alt="Sai Krishna" />
        </div>
      </div>
    </section>
  );
};

export default Home;
