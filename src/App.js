import "./App.css";
import AdditionalInfo from "./components/additionalInfo";
import Experience from "./components/experience";
import ProfessionalExperience from "./components/professionalExperience";
import TechnicalSkills from "./components/technicalSkills";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="resumeTitle">
          <h2>Aruna Veeramreddy</h2>
          <h2>Full Stack Developer</h2>
          <AdditionalInfo />
          <ProfessionalExperience />
          <TechnicalSkills />
          <Experience />
        </div>
      </header>
    </div>
  );
}

export default App;
