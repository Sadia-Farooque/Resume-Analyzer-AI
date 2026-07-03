
import "./App.css";
import {useState} from "react";
import Hero from "./Components/Hero";
import Result from "./Components/Result";
import Footer from "./Components/Footer";
import AnalyzeButton from "./Components/AnalyzeButton";
import JobDescription from "./Components/JobDescription";
import ResumeUpload from "./Components/Resumeanalyzer";

function App(){
  const [selectedFile, setSelectedFile]= useState(null);
  const [jobDescription , setJobDescription] = useState("");
  const [loading , setLoading]= useState(false);
  const [showResult , setShowResult]= useState(false);
  return(
  <>
   <Hero />
    <ResumeUpload 
    selectedFile={selectedFile}
    setSelectedFile={setSelectedFile}
    />
    <JobDescription 
    jobDescription={jobDescription}
    setJobDescription={setJobDescription}/>
    <AnalyzeButton />
    <Footer />

</>
        
      
 
  );
}

export default App;