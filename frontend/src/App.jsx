
import "./App.css";
import Hero from "./Components/Hero";
import Result from "./Components/Result";
import Footer from "./Components/Footer";
import AnalyzeButton from "./Components/AnalyzeButton";
import JobDescription from "./Components/JobDescription";
import ResumeUpload from "./Components/Resumeanalyzer";

function App(){
  return(
  <>
   <Hero />
    <ResumeUpload />
    <JobDescription />
    <AnalyzeButton />
    <Footer />

</>
        
      
 
  );
}

export default App;