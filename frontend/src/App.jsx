
import "./App.css";
import { useState } from "react";
import Loading from "./components/Loading";
import { analyzeResume } from "./services/resumeAnalysisService";
import Hero from "./components/Hero";
import Result from "./components/Result";
import Footer from "./components/Footer";
import AnalyzeButton from "./components/AnalyzeButton";
import JobDescription from "./components/JobDescription";
import ResumeUpload from "./components/ResumeUpload";
function App(){
  const [selectedFile, setSelectedFile]= useState(null);
  const [jobDescription , setJobDescription] = useState("");
  const [loading , setLoading]= useState(false);
  const [showResult , setShowResult]= useState(false);
const handleAnalyze = async () => {
  setLoading(true);

  try {
    const data = await analyzeResume(
      selectedFile,
      jobDescription
    );

    console.log(data);

    setLoading(false);
    setShowResult(true);

  } catch (error) {
    console.error(error);
    setLoading(false);
  }
};
  if (loading) {
    return (
      <Loading
        setLoading={setLoading}
        setShowResults={setShowResult}
      />
    );
  }
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
    <AnalyzeButton 
    selectedFile={selectedFile}
    jobDescription={jobDescription}
  onAnalyze={handleAnalyze}
    />
    {showResult && <Result />}
    <Footer />

</>
        
      
 
  );
}

export default App;